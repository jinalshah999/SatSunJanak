import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
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
}
