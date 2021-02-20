import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormControlDirective,
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
  cities: string[] = ['ahmedabad', 'baroda', 'surat'];
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
      user_email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      user_mobile: new FormControl(null),
      user_notification: new FormControl('email'),
      password_group: new FormGroup(
        {
          user_password: new FormControl(null, Validators.required),
          user_confirm_password: new FormControl(null),
        },
        this.matchPassword.bind(this)
      ),
      user_hobbies: new FormArray([]),
      user_city: new FormControl('ahmedabad', Validators.required),
    });

    this.user_signup
      .get('user_notification')
      .valueChanges.subscribe((x) => this.setValidations(x));
  }
  setValidations(value: string): void {
    let emailcontrol = this.user_signup.get('user_email');
    let phonecontrol = this.user_signup.get('user_mobile');
    if (value == 'email') {
      phonecontrol.clearValidators();
      emailcontrol.setValidators([Validators.required, Validators.email]);
    } else {
      emailcontrol.clearValidators();
      phonecontrol.setValidators([Validators.required]);
      emailcontrol.setValidators([Validators.email]);
    }
    emailcontrol.updateValueAndValidity();
    phonecontrol.updateValueAndValidity();
  }
  getHobbies() {
    return (<FormArray>this.user_signup.get('user_hobbies')).controls;
  }
  onUserAdd() {
    console.log('frm values', this.user_signup);
  }
  onDeleteHobbyClick(i) {
    (<FormArray>this.user_signup.get('user_hobbies')).removeAt(i);
  }
  onAddHobbyClick() {
    let cntrl = new FormControl(null);
    (<FormArray>this.user_signup.get('user_hobbies')).push(cntrl);
  }
}
