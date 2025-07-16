import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChildren,
  viewChildren,
} from '@angular/core';
import { BarComponent } from '../bar/bar.component';

@Component({
  selector: 'app-foo',
  imports: [BarComponent],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss',
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

  interval!: number;

  sum: number = 0;

  calculateSum() {
    console.log(this.barElements);
    this.sum = this.barComponent.reduce((acc, curr) => acc + curr.value, 0);
  }
  ngOnInit(): void {
    console.log('ngOnInit', this.value);

    // this.interval = setInterval(() => {
    //   console.log('TICK');
    // }, 1000) as unknown as number;
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
