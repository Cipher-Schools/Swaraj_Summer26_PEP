import { Component } from '@angular/core';
import { Button } from '../../shared/button/button';
import { buttonConfig } from '../../utils/utils';

@Component({
  selector: 'app-login',
  imports: [Button],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  buttonConfig = buttonConfig;
  userName = "";
  password = "";

  userLogIn(){
    console.log("User Logged in");
  }
}
