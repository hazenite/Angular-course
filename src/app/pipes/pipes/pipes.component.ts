import {
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { FooPipe } from '../foo.pipe';
import { PlaceholderPipe } from '../../placeholder.pipe';
import { SubstringPipe } from '../substring.pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    DatePipe,
    CurrencyPipe,
    UpperCasePipe,
    JsonPipe,
    FooPipe,
    PlaceholderPipe,
    SubstringPipe,
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  valueText: string = 'Lorem ipsum';
  value: string = 'substring123';
  price = 1234.34;
  date = new Date();
  obj = {
    a: 10,
    b: 12,
    c: 123,
    d: 1234,
  };

  setValue() {
    this.value = 'Lorem ipsum';
  }
}
