import { Component, inject } from '@angular/core';
import { Button } from '../../shared/button/button';
import { buttonConfig } from '../../utils/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [Button],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router = inject(Router);
  buttonConfig = buttonConfig;
  userName = "";
  password = "";
  passToggle = false;
  currLoggedInUser = {} as any;

  ngOnInit(){
    this.currLoggedInUser = localStorage.getItem("userDetails");
    this.currLoggedInUser = JSON.parse(this.currLoggedInUser);
    console.log("currLoggedInUser", this.currLoggedInUser);
  }


  userLogIn(){
    if(this.userName == this.currLoggedInUser?.name && this.password == this.currLoggedInUser?.pass){
      // Login successful
      console.log("Login successful");
      this.router.navigate(['/home']);
    }else{
      // Login failed
      console.log("Login failed");
      this.router.navigate(['/signup']);
    }
  }
}
