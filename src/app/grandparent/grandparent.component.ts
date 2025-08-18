import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-grandparent',
  imports: [ParentComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './grandparent.component.html',
  styleUrl: './grandparent.component.scss',
})
export class GrandparentComponent {
  @Input() numbers: number[] = [];

  @Output() onNewNumber = new EventEmitter<number>();

  handleNewValue(newValue: number) {
    this.onNewNumber.emit(newValue);
  }
}
