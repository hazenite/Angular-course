import { Component } from '@angular/core';

@Component({
  selector: 'app-snart-component',
  imports: [],
  templateUrl: './snart-component.component.html',
  styleUrl: './snart-component.component.scss',
})
export class SnartComponentComponent {
  constructor() {
    console.log(' i am contstraktor ');

    setInterval(() => {
      console.log('TICK TICK');
    }, 1000);
  }
}
