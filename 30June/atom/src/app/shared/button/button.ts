import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  buttonText = input<string>();
  buttonSize = input<string>();
  isButtonDisabled = input<boolean>(false);
  buttonType = input<string>();
  buttonFn = output();

  buttonClick() {
    this.buttonFn.emit();
    console.log(this.buttonSize());
    console.log(this.buttonType());
  }
}
