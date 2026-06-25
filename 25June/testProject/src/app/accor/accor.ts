import { Component } from '@angular/core';

@Component({
  selector: 'app-accor',
  imports: [],
  templateUrl: './accor.html',
  styleUrl: './accor.css',
})
export class Accor {
  accordionData = [
    {
      title: 'What is Angular?',
      content: 'Angular is a TypeScript-based front-end framework used to build web applications.',
      isOpen: false,
    },
    {
      title: 'What is Data Binding?',
      content: 'Data binding is the process of connecting component data with the UI.',
      isOpen: true,
    },
    {
      title: 'What is Dependency Injection?',
      content: 'Dependency Injection allows Angular to provide required services to components.',
      isOpen: false,
    },
    {
      title: 'What is a Component?',
      content: 'A component controls a part of the UI and contains template, styles, and logic.',
      isOpen: false,
    },
  ];

  toggleAccordion(idx: number) {
    console.log('Toggled accordion at index:', idx);
    this.accordionData[idx].isOpen = !this.accordionData[idx].isOpen;
  }
}
