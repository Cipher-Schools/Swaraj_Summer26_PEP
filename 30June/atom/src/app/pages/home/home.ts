import { Component, signal } from '@angular/core';
import { buttonConfig, users } from '../../utils/utils';
import { RouterLink } from '@angular/router';
import { About } from '../about/about';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-home',
  imports: [RouterLink, About, Button],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  buttonConfig = buttonConfig;
  textVal = signal<string>("Hello from parent")

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
