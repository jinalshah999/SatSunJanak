import { RouterModule, Routes } from '@angular/router';
import { EdittodosComponent } from './edittodos/edittodos.component';
import { TodoeditguardService } from './todoeditguard.service';
import { TodoresolverService } from './todoresolver.service';
import { TodosComponent } from './todos.component';

const arr: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TodosComponent,
        resolve: { data: TodoresolverService },
      },
      {
        path: 'edit/:Id',
        component: EdittodosComponent,
        canDeactivate: [TodoeditguardService],
      },
    ],
  },
];

export const todoroutingarr = RouterModule.forChild(arr);
