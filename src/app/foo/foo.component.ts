import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  signal,
  SimpleChanges,
  ViewChildren,
  viewChildren,
  WritableSignal,
} from '@angular/core';
import { BarComponent } from '../bar/bar.component';

@Component({
  selector: 'app-foo',
  imports: [BarComponent],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit
{
  ngAfterViewInit(): void {
    console.log('after', this.barElements);
  }
  @ViewChildren(BarComponent) barComponent!: QueryList<BarComponent>;

  @ViewChildren(BarComponent, { read: ElementRef })
  barElements!: QueryList<ElementRef>;

  @Input()
  value: string = '';
  @Input() users: string[] = [];

  counter: WritableSignal<number> = signal(0);

  interval!: number;

  sum: number = 0;

  calculateSum() {
    console.log(this.barElements);
    this.sum = this.barComponent.reduce((acc, curr) => acc + curr.value, 0);
  }
  ngOnInit(): void {
    // console.log('ngOnInit', this.value);
    // this.interval = setInterval(() => {
    //   console.log('TICK');
    // }, 1000) as unknown as number;
    // console.log('Interval handler', this.interval);

    this.interval = setInterval(() => {
      this.counter.update((prev) => prev + 1);
    }, 1000) as unknown as number;
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
