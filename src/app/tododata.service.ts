import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from './todos/todo';
@Injectable({
  providedIn: 'root',
})
export class TododataService {
  url: string = environment.baseURL + 'tasks/';
  head1: string = environment.header;
  value: string = environment.value;
  constructor(private _http: HttpClient) {}

  getAllTodos() {
    return this._http.get(this.url);
  }
  getTodoById(Id) {
    return this._http.get(this.url + Id);
  }
  addTodos(item: Todo) {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set(this.head1, this.value);
    return this._http.post(this.url, body, { headers: head });
  }
  deleteTodo(id) {
    let head = new HttpHeaders().set(this.head1, this.value);
    return this._http.delete(this.url + id, { headers: head });
  }
  editTodo(item: Todo) {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set(this.head1, this.value);
    return this._http.put(this.url + item.Id, body, { headers: head });
  }
}
