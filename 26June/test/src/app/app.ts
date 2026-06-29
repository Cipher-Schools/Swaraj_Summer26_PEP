import { Card } from './card/card';
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, RouterLinkWithHref, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = signal('test');
  receiveData(str: string) {
    console.log(str); 
    this.title.set(str);
  }

  todoText = "";

  todoArr = signal<any>([]);

  onInput(event : any) {
    this.todoText = (event.target.value);
  }

  addTodo(){
    let obj = {
      id: Date.now(),
      text: this.todoText,
      isDone: false
    }

    this.todoArr.set([...this.todoArr(), obj]);
  }

  // arr: number[] = [
  //   10, 20, 30, 40
  // ]

  // name = signal("TEST NAME ");

  // obj = {
  //   name: "TestName",
  //   age: "TestAge",
  //   c: 20
  // }
}

interface todoInterface{
  id: number,
  text: string,
  isDone: boolean
}