import { Component, inject } from '@angular/core';
import { Button } from '../../shared/button/button';
import { buttonConfig } from '../../utils/utils';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [Button],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public router = inject(Router);
  public AuthService = inject(AuthService);
  buttonConfig = buttonConfig;
  username = '';
  userpass = '';
  passToggle = false;

  ngOnInit() {
    // console.log("Hello from ng")
    const userDetails = localStorage.getItem('userDetails');
    const parsedDetails = JSON.parse(userDetails ?? `{}`);
    this.AuthService.currLoggedInUser.set(parsedDetails);
    console.log(this.AuthService.currLoggedInUser());
  }

  login() {

    this.AuthService.password = this.userpass;
    this.AuthService.userName = this.username;
    this.AuthService.userLogIn(this.username, this.userpass);
  }
}
