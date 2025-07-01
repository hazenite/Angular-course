import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycletester',
  imports: [],
  templateUrl: './lifecycletester.component.html',
  styleUrl: './lifecycletester.component.scss',
})
export class LifecycletesterComponent implements OnInit, OnChanges, OnDestroy {
  ngOnDestroy(): void {
    console.log('Ive destroyed that');
  }
  @Input() myChange: number = 0;

  ngOnInit(): void {
    console.log('change value in on Init: ', this.myChange);
  }

  changeIt() {
    this.myChange = 1;
    console.log('myChange', this.myChange);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change value in on change function', changes);
  }
}
