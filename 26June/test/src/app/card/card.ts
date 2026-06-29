import { Component, EventEmitter, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  // data = input();
  parentData = input<string>();
  // parentObj = input<dataObj>();

  // @Output() // Older version before Angular 17
  // sendData = new EventEmitter();

  // sendData = output<string>();






  // constructor() {
  //   @output() sendData = new EventEmitter();
  // }

  


  // data(){
  //   this.sendData.emit('from child');
  //   // return 'child';
  // }
}

interface dataObj {
  name: string;
  age: string;
  c: number;
}
