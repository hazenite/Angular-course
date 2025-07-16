import {
  Component,
  EventEmitter,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  value: number = 1000;

  value2: null | number = null;

  @Output() handleNewValue3 = new EventEmitter<string>();

  value3: number = 10;

  changeValue = (newValue: number) => {
    console.log('Trying to save number', newValue, this);
    this.value2 = newValue;
  };

  randomizeValue() {
    this.value2 = Math.round(Math.random() * (100 - 1) + 1);
  }

  handleNewValue(newValue: number) {
    console.log('Trying to save number sent by Event Emitter', newValue, this);
    this.value2 = newValue;
  }

  handleCustomEvent(value: { title: string; description: string }) {
    console.log(value);
  }
  handleNewValue2(value: string) {
    this.handleNewValue3.emit(value);
  }

  increase() {
    this.value++;
  }
}
