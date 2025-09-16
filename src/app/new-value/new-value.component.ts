import { Component, inject } from '@angular/core';
import { ValuesServiceService } from '../services/values-service.service';

@Component({
  selector: 'app-new-value',
  imports: [],
  templateUrl: './new-value.component.html',
  styleUrl: './new-value.component.scss',
})
export class NewValueComponent {
  private valuesService = inject(ValuesServiceService);

  addNewValue() {
    const number = Math.round(Math.random() * 100);
    this.valuesService.addNewValue(number);
  }
}
