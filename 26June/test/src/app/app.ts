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

    if(this.todoText.trim() === ""){
      alert("Please enter some text");
      return;
    } 

    this.todoArr.set([...this.todoArr(), obj]);
    this.todoText = "";
  }
  deleteTodo(delId: number, flag : boolean){
    console.log(delId);

    this.todoArr.update((item) => {
      return item.filter((todo: todoInterface) => {
        if(todo.id === delId){
          if(flag == true){
            this.todoText = todo.text;
          }
          
          return false;
        }
        return true;
      });
    })
  }

  updateTodo(id: number){
    this.deleteTodo(id, true);
  }

  toggleTodo(id: number){
    this.todoArr.update((item) => {
      return item.map((todo: todoInterface) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone
          }
        }
        return todo;
      })
    })
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