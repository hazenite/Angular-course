import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  value: null | number = null;

  value2: number = 10;

  changeValue = (newValue: number) => {
    console.log('Trying to save number', newValue, this);
    this.value2 = newValue;
  };

  randomizeValue() {
    this.value = Math.round(Math.random() * (100 - 1) + 1);
  }

  handleNewValue(newValue: number) {
    console.log('Trying to save number sent by Event Emitter', newValue, this);
    this.value2 = newValue;
  }

  handleCustomEvent(value: { title: string; description: string }) {
    console.log(value);
  }
}
