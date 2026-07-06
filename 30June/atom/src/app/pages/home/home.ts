import { Component, inject, signal } from '@angular/core';
import { buttonConfig, users } from '../../utils/utils';
import { Router, RouterLink } from '@angular/router';
import { About } from '../about/about';
import { Button } from '../../shared/button/button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, About, Button],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private authService = inject(AuthService);
  public router = inject(Router);
  buttonConfig = buttonConfig;
  textVal = signal<string>('Hello from parent');
  // userName = this.authService.userName

  logout() {
    this.authService.currLoggedInUser.set({
      name: '',
      pass: '',
      currLoggedInUserStatus: false,
    });
    localStorage.removeItem('userDetails');
    this.router.navigate(['']);
  }

  ngOnInit() {
    console.log('%cParent NgOnInit', 'color: green;');
  }

  ngOnChanges() {
    console.log('%cParent NgOnChanges', 'color: Red;');
  }

  ngOnDestroy() {
    console.log('%cParent NgOnDestroy', 'color: blue;');
  }

  updateText() {
    this.textVal.set(Date.now().toString());
  }

  buttonFn() {
    console.log('Button clicked!');
  }

  users = users;
}
