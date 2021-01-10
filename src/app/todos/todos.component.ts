import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  flag1: boolean = true;
  flag: boolean = false;
  statusArr: string[] = ['done', 'pending'];
  Id: string;
  Title: string;
  Status: string;
  todosArr: Todo[] = [
    new Todo('1', 'go for running', 'pending'),
    new Todo('2', 'Email to your manager', 'pending'),
    new Todo('3', 'push your code to github', 'done'),
  ];
  constructor() {}

  ngOnInit(): void {}
  onDelete(item: Todo): void {
    this.todosArr.splice(this.todosArr.indexOf(item), 1);
  }
  onEdit(item: Todo): void {
    if (item.Status == 'done') {
      item.Status = 'pending';
    } else {
      item.Status = 'done';
    }
  }
  onAddButtonClick(): void {
    this.flag = true;
  }
  onCancelButtonClick(): void {
    this.flag = false;
  }
  onSaveButtonClick(): void {
    this.todosArr.push(new Todo(this.Id, this.Title, this.Status));
    this.Id = '';
    this.Title = '';
    this.Status = '';
    this.flag = false;
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
