import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { TimeoutConfig } from 'rxjs';

@Component({
  selector: 'app-foo',
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss',
})
export class FooComponent implements OnInit, OnChanges, OnDestroy {
  @Input() value: string = '';
  @Input() users: string[] = [];

  interval!: number;

  ngOnInit(): void {
    console.log('ngOnInit', this.value);

    this.interval = setInterval(() => {
      console.log('TICK');
    }, 1000) as unknown as number;
    console.log('Interval handler', this.interval);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on Changes', changes);
  }

  ngOnDestroy(): void {
    console.log('destroy');
    clearInterval(this.interval);
  }

  callMe() {
    console.log('blablax');
    return this.value;
  }
}
