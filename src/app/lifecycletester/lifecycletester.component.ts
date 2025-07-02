import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-lifecycletester',
  imports: [],
  templateUrl: './lifecycletester.component.html',
  styleUrl: './lifecycletester.component.scss',
})
export class LifecycletesterComponent implements OnChanges, OnDestroy {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('blabla', changes);
  }
  ngOnDestroy(): void {
    console.log('Ive destroyed that');
  }
  @Input() myChange: number = 0;
  @Input() myRandomNumbers: number[] = [];
}
