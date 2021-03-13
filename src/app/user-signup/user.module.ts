import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UserSignupComponent } from './user-signup.component';
import { UserRoutesarr } from './user.routing';

@NgModule({
  declarations: [UserSignupComponent],
  imports: [CommonModule, ReactiveFormsModule, UserRoutesarr],
})
export class UserModule {}
