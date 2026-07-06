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

  login() {
    this.AuthService.password = this.userpass;
    this.AuthService.userName = this.username;
    const isLoggedIn = this.AuthService.userLogIn(this.username, this.userpass);

    if (isLoggedIn) {
      this.AuthService.currLoggedInUser.set({
        name: this.username,
        pass: this.userpass,
        currLoggedInUserStatus: true,
      });

      localStorage.setItem('userDetails', JSON.stringify(this.AuthService.currLoggedInUser()));

      this.router.navigate(['/home']);
    }
  }
}
