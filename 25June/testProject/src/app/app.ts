import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Accor } from './accor/accor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Accor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ClassProject');

  name : string = "John Doe"
  count: number = 0;

  imageArr : string[] = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3CiAqDIx4rw-iDdzZwM4ZfzIMGCP_btIP1KLi3z20cw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6YJNK-u5levt-yzeIaomcbVzkiegBeWM1LN1Ly19X6Q&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_oyyq59soZdkY-CWydIfH2HRGNVR_IJ5H0DqxqyQDPQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBro7Rj-xx19H4tqdiFXIzznhq3qxQl9LnFviMqHkvBQ&s=10",
  ]

  incrementVal():void {
    this.count = (this.count + 1) % this.imageArr.length;
  }

  decrementVal():void {
    if(this.count > 0) {
      this.count = (this.count - 1 + this.imageArr.length) % this.imageArr.length;
    }
  }

}
