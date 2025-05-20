import { Component, EventEmitter, Output } from '@angular/core';
import { RandomNumbersComponent } from '../random-numbers/random-numbers.component';

@Component({
  selector: 'app-random-number-button',
  imports: [],
  templateUrl: './random-number-button.component.html',
  styleUrl: './random-number-button.component.scss',
})
export class RandomNumberButtonComponent {
  @Output() RandomNumber = new EventEmitter<number>();

  rndNumber: null | number = null;

  generateNumber() {
    this.rndNumber = Math.round(Math.random() * (100 - 1) + 1);
    console.log(this.rndNumber);
    this.RandomNumber.emit(this.rndNumber);
  }
}
