import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TododataService } from 'src/app/tododata.service';
import { Todo } from '../todo';
@Component({
  selector: 'app-edittodos',
  templateUrl: './edittodos.component.html',
  styleUrls: ['./edittodos.component.css'],
})
export class EdittodosComponent implements OnInit {
  Id;
  todoID;
  frag;
  statusArr: string[] = ['done', 'pending'];
  edittodo: FormGroup;

  constructor(
    private _actroute: ActivatedRoute,
    private _router: Router,
    private _tododata: TododataService
  ) {}

  initForm() {
    this.edittodo = new FormGroup({
      Id: new FormControl(null, [Validators.required]),
      Title: new FormControl(null, [Validators.required]),
      Status: new FormControl(null, [Validators.required]),
    });
  }

  editForminit(todo: Todo) {
    this.edittodo.patchValue({
      Id: todo.Id,
      Title: todo.Title,
      Status: todo.Status,
    });
  }
  ngOnInit(): void {
    this.Id = this._actroute.snapshot.params['Id'];
    console.log(this.Id);
    this.initForm();
    this._tododata.getTodoById(this.Id).subscribe((data: Todo[]) => {
      this.editForminit(data[0]);
    });

    // this._actroute.params.subscribe((data) => {
    //   console.log(data);
    //   this.Id = data.Id;
    // });
    // this._actroute.queryParams.subscribe();
    // this._actroute.fragment.subscribe();
    //console.log('hello from ngoninit');
    // this.todoID = this._actroute.snapshot.queryParams['todo_id'];
    // this.frag = this._actroute.snapshot.fragment;
    // console.log('query params', this.todoID);
    // console.log('fragment', this.frag);
  }
  onSaveClick() {
    this._tododata.editTodo(this.edittodo.value).subscribe((data: any) => {
      if (data.affectedRows == 1) {
        this._router.navigate(['/']);
      }
    });
  }
  onClick() {
    this._router.navigate(['/edittodo', 10]);
  }
}
