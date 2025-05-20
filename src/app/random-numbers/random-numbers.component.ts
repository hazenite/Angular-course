import { Component } from '@angular/core';
import { RandomNumberButtonComponent } from '../random-number-button/random-number-button.component';

@Component({
  selector: 'app-random-numbers',
  imports: [RandomNumberButtonComponent],
  templateUrl: './random-numbers.component.html',
  styleUrl: './random-numbers.component.scss',
})
export class RandomNumbersComponent {
  numbers: number[] = [];
  number: number = 0;

  joined: string = '';

  handleNewRandomNumber(newValue: number) {
    this.number = newValue;
    this.numbers.push(this.number);
    this.joined = this.numbers.join(', ');
  }
}
