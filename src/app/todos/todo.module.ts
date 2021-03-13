import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdittodosComponent } from './edittodos/edittodos.component';
import { TodosComponent } from './todos.component';
import { todoroutingarr } from './todos.routing';

@NgModule({
  declarations: [TodosComponent, EdittodosComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, todoroutingarr],
})
export class TodoModule {}
