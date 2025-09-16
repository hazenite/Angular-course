import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValuesServiceService {
  numbers = signal<number[]>(Array.from({ length: 100 }, (_, i) => i));

  addNewValue(newValue: number) {
    this.numbers.update((current) => [...current, newValue]);
  }
}
