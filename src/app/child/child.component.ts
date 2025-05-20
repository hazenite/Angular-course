import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() random: null | number = null;
  @Input() callback!: (newValue: number) => void;

  @Output()
  onNewValue = new EventEmitter<number>();

  @Output() onNewValue2 = new EventEmitter<string>();

  emitNewValue2() {
    this.onNewValue2.emit('Lorem Ipsum ');
  }

  @Output() onCustomEvent = new EventEmitter<{
    title: string;
    description: string;
  }>();

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
}
