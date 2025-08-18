import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnChanges {
  @Input() numbers: number[] = [];

  @Input() value!: number;
  @Output() valueChange = new EventEmitter<number>();

  @Output() onNewNumber = new EventEmitter<number>();

  @Input() random: null | number = null;
  @Input() callback!: (newValue: number) => void;

  @Output()
  onNewValue = new EventEmitter<number>();

  @Output() onNewValue2 = new EventEmitter<string>();

  @Output() onCustomEvent = new EventEmitter<{
    title: string;
    description: string;
  }>();

  emitNewValue2() {
    this.onNewValue2.emit('Lorem Ipsum ');
  }

  addNewNumber() {
    const newValue = Math.round(Math.random() * 80);
    this.onNewNumber.emit(newValue);
  }

  setNewValue() {
    if (typeof this.callback === 'function') {
      const newValue = Math.round(Math.random() * 1000);
      this.callback(newValue);
      console.log('liczba', newValue);
      this.onCustomEvent.emit({
        title: 'Magda sie uczy',
        description: `Value: ${newValue}'`,
      });
    } else {
      console.warn('callback is not a function');
    }
  }

  emitNewValue() {
    const newValue = Math.round(Math.random() * 100);
    this.onNewValue.emit(newValue);
  }

  increase() {
    this.valueChange.emit(this.value + 1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Parent changes', changes);
  }
}
