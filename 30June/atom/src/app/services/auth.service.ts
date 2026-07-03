import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public router = inject(Router);
  public currLoggedInUser = signal({} as any);
  userName = '' as any;
  password = '' as any;

  userLogIn(name?: string, password?: string) {
    if (this.userName === this.currLoggedInUser()?.name && this.password === this.currLoggedInUser()?.pass) {
      console.log('Login successful');
      return true;  
    } else {
      console.log('Login failed');
      return false;
    }
  }
}
