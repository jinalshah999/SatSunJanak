import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TododataService } from '../tododata.service';
import { Todo } from './todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit, OnDestroy {
  flag1: boolean = true;
  flag: boolean = false;
  statusArr: string[] = ['done', 'pending'];
  Id: string;
  Title: string;
  Status: string;
  todosArr: Todo[] = [];
  sub: Subscription;
  constructor(private _todos: TododataService, private _router: Router) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this._todos.getAllTodos().subscribe(
      (data: Todo[]) => {
        if (data.length != 0) {
          this.todosArr = data;
        }
      },
      function (error) {
        console.log(error);
      },
      function () {
        console.log('complete');
      }
    );
  }
  onDelete(item: Todo): void {
    if (confirm('Are you sure?')) {
      this._todos.deleteTodo(item.Id).subscribe((data: any) => {
        if (data.affectedRows == 1) {
          this.todosArr.splice(this.todosArr.indexOf(item), 1);
        } else {
          alert('something went wrong');
        }
      });
    }
  }
  //localhost:4200/edittodo/1
  onEdit(item: Todo): void {
    this._router.navigate(['/edittodo', item.Id]);
    // {
    //   queryParams: { todo_id: item.Id },
    //   fragment: 'hello',
    // }
  }
  onAddButtonClick(): void {
    this.flag = true;
  }
  onCancelButtonClick(): void {
    this.flag = false;
  }
  onSaveButtonClick(): void {
    let item: Todo = new Todo(this.Id, this.Title, this.Status);
    this._todos.addTodos(item).subscribe((data: any) => {
      this.todosArr.push(item);
      this.flag = false;
    });
    // this.todosArr.push(new Todo(this.Id, this.Title, this.Status));
    // this.Id = '';
    // this.Title = '';
    // this.Status = '';
    //
  }
  onRefreshClick() {
    this.todosArr = [
      new Todo('1', 'go for running', 'pending'),
      new Todo('2', 'Email to your manager', 'pending'),
      new Todo('3', 'push your code to github', 'done'),
      new Todo('4', 'sample', 'pending'),
    ];
  }
  trackByTodoId(todo: Todo) {
    return todo.Id;
  }
  onClickMe() {
    this.flag1 = !this.flag1;
  }
}
