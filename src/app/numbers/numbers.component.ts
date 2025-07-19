import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-numbers',
  imports: [],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.scss',
})
export class NumbersComponent {
  age: WritableSignal<number> = signal(18);

  numbers: WritableSignal<number[]> = signal([]);

  evenNumbers: Signal<number[]> = computed(() =>
    this.numbers().filter((val) => val % 2 === 0)
  );

  isHeOld: Signal<boolean> = computed(() => {
    if (this.age() >= 18) {
      return true;
    } else {
      return false;
    }
  });

  constructor() {
    effect(() => {
      console.log(`numbers of even numbers: ${this.evenNumbers().length}`);
    });
  }

  addNewNumber() {
    const newNumber = Math.round(Math.random() * 1000);
    this.numbers.update((prevNumbers) => [...prevNumbers, newNumber]);
  }

  increase() {
    this.age.update((prev) => prev + 1);
  }

  decrease() {
    this.age.update((prev) => prev - 1);
  }
}
