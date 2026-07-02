import { Component, inject } from '@angular/core';
import { Button } from '../../shared/button/button';
import { buttonConfig } from '../../utils/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [Button],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  route = inject(Router);
  buttonConfig = buttonConfig;
  userName = "";
  password = "";
  passToggle = false;


  userLogIn(){
    const userloginData = {
      name: this.userName,
      pass: this.password
    }
    if(this.userName.trim().length > 3 && this.password.trim().length > 3){
      localStorage.setItem("userDetails", JSON.stringify(userloginData));
      this.route.navigate(['']);
    }else{
      return;
    }
    
  }
}
