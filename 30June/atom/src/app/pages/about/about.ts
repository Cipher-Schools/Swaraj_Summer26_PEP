import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  parentData = input<string>();

    ngOnInit() {
    console.log('%cChild NgOnInit', 'color: green;');
  }

  ngOnChanges() {
    console.log('%cChild NgOnChanges', 'color: Red;');
  }

  ngOnDestroy() {
    console.log('%cChild NgOnDestroy', 'color: blue;');
  }
}
