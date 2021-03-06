import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  currentUser = null;
  redirectURL: string = '';
  constructor(private _router: Router) {}

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  LogIn(username: string, password: string) {
    localStorage.setItem('user_name', username);

    //replace your logic here
    if (username == 'admin') {
      this.currentUser = {
        id: 'admin@gmail.com',
        uname: 'admin',
        isAdmin: true,
      };
      return;
    }
    this.currentUser = {
      id: username + '@gmail.com',
      uname: username,
      isAdmin: false,
    };
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('user_name');
    this._router.navigate(['/login']);
  }
}
