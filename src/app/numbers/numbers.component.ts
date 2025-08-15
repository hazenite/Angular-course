import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DoCheck,
  effect,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  Output,
  Signal,
  signal,
  SimpleChanges,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-numbers',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.scss',
})
export class NumbersComponent implements DoCheck, OnInit, OnChanges {
  @Input() value: string = '';

  @Input() values: number[] = [];

  @Output() onNewValue = new EventEmitter<number>();

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

  constructor(private ngZone: NgZone) {
    effect(() => {
      console.log(`numbers of even numbers: ${this.evenNumbers().length}`);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngDoCheck', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck z numbers');
  }

  addNewNumber() {
    const newNumber = Math.round(Math.random() * 1000);
    this.numbers.update((prevNumbers) => [...prevNumbers, newNumber]);
  }
  ngOnInit(): void {
    // this.ngZone.runOutsideAngular(() => {
    //   setInterval(() => {
    //     console.log('BIP');
    //   }, 1000);
    // });
  }
  increase() {
    this.age.update((prev) => prev + 1);
  }

  decrease() {
    this.age.update((prev) => prev - 1);
  }
}
