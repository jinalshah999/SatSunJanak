import { RouterModule, Routes } from '@angular/router';
import { UserSignupComponent } from './user-signup.component';

const arr: Routes = [
  { path: '', children: [{ path: '', component: UserSignupComponent }] },
];

export const UserRoutesarr = RouterModule.forChild(arr);
