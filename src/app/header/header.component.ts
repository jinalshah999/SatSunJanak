import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private _regData: RegistrationService) {}

  ngOnInit(): void {}

  get isLoggedIn(): boolean {
    return this._regData.isLoggedIn;
  }
  onlogoutClick() {
    this._regData.logout();
  }
}
