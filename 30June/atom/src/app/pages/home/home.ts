import { Component, signal } from '@angular/core';
import { users } from '../../utils/utils';
import { RouterLink } from '@angular/router';
import { About } from '../about/about';

@Component({
  selector: 'app-home',
  imports: [RouterLink, About],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
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

  users = users;
}
