import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TododataService } from '../tododata.service';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoresolverService implements Resolve<Todo[]> {
  constructor(private _tododata: TododataService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Todo[]> {
    return this._tododata.getAllTodos().pipe(
      map((data: Todo[]) => {
        console.log('from resolver', data);
        return data;
      })
    );
  }
}
