import { Component } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-grandparent',
  imports: [ParentComponent],
  templateUrl: './grandparent.component.html',
  styleUrl: './grandparent.component.scss',
})
export class GrandparentComponent {
  handleNewValueFromGrandComponent(value: string) {
    console.log(value);
  }
}
