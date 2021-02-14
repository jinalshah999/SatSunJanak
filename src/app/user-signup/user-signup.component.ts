import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
})
export class UserSignupComponent implements OnInit {
  user_signup: FormGroup;

  invalidNames: string[] = ['jinal', 'shah'];

  invalidName(c: AbstractControl): { [key: string]: boolean } | null {
    if (this.invalidNames.indexOf(c.value) >= 0) {
      return { customError: true };
    }
    return null;
  }
  matchPassword(c: AbstractControl): { [key: string]: boolean } {
    if (c.get('user_password').value !== c.get('user_confirm_password').value) {
      return { passwordError: true };
    }
    return null;
  }
  constructor() {}
  ngOnInit(): void {
    this.user_signup = new FormGroup({
      user_name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z]*'),
        this.invalidName.bind(this),
      ]),
      user_email: new FormControl(null),
      password_group: new FormGroup(
        {
          user_password: new FormControl(null, Validators.required),
          user_confirm_password: new FormControl(null),
        },
        this.matchPassword.bind(this)
      ),
    });
  }
  onUserAdd() {
    console.log('frm values', this.user_signup);
  }
}
