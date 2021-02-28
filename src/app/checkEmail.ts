import { AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { UserDataService } from './user-data.service';
import { Users } from './user-signup/users';

export class CheckEmail {
  static emailValidator(x: UserDataService): AsyncValidatorFn {
    return (
      cntrl: AbstractControl
    ): Observable<{ [key: string]: boolean } | null> => {
      return x.getUserById(cntrl.value).pipe(
        map((res: Users[]) => {
          if (res.length == 1) {
            return { emailInUse: true };
          }
          return null;
        })
      );
    };
  }
}
