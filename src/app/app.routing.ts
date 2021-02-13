import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { PagenotfountComponent } from './pagenotfount/pagenotfount.component';
import { ParentComponent } from './parent/parent.component';
import { ProductsComponent } from './products/products.component';
import { TodosComponent } from './todos/todos.component';

const arr: Routes = [
  //{path:'',redirectTo:'/todo',pathMatch:'full'},
  { path: '', component: TodosComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'product', component: ProductsComponent },
  //{ path: 'todo', component: TodosComponent },
  { path: 'directive', component: DirectiveDemoComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'pagenotfound', component: PagenotfountComponent },
  { path: '**', redirectTo: '/pagenotfound' },
];

export const routingarr = RouterModule.forRoot(arr);
