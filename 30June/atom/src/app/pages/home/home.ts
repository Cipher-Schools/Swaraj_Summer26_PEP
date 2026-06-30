import { Component } from '@angular/core';
import { users } from '../../utils/utils';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  users = users
}
