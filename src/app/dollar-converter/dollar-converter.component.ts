import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dollar-converter',
  imports: [],
  templateUrl: './dollar-converter.component.html',
  styleUrl: './dollar-converter.component.scss',
})
export class DollarConverterComponent {
  @Input() amount: number = 0;
  @Input() currency: string = '';
  @Input() rate: number = 0;

  total: null | number = null;

  convertToDollars() {
    return (this.total = this.amount * this.rate);
  }
}
