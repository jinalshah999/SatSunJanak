import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private _regData: RegistrationService, private _router: Router) {}

  ngOnInit() {
    this.buildForm();
  }
  onloginSubmit() {
    if (
      this.loginForm.get('user_name').value == 'admin' &&
      this.loginForm.get('user_password').value == '1234'
    ) {
      this._regData.LogIn(
        this.loginForm.get('user_name').value,
        this.loginForm.get('user_password').value
      );
      if (this._regData.redirectURL) {
        this._router.navigateByUrl(this._regData.redirectURL);
      } else {
        this._router.navigate(['/demo']);
      }
    } else {
      alert('invalid username or password');
    }
  }
  buildForm() {
    this.loginForm = new FormGroup({
      user_name: new FormControl(null),
      user_password: new FormControl(null),
    });
  }
}
