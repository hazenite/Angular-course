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

  randomizeValue() {
    this.value = Math.round(Math.random() * (100 - 1) + 1);
  }
}
