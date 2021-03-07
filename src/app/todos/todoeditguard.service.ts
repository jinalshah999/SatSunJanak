import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EdittodosComponent } from './edittodos/edittodos.component';

@Injectable({
  providedIn: 'root',
})
export class TodoeditguardService implements CanDeactivate<EdittodosComponent> {
  constructor() {}
  canDeactivate(
    component: EdittodosComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    return confirm('Are you sure you want to navigate away?');
  }
}
