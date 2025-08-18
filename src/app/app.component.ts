import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { FooComponent } from './foo/foo.component';
import { Coords } from './types';
import { TitleComponent } from './title/title.component';
import { MyIpComponent } from './my-ip/my-ip.component';
import { LifecycletesterComponent } from './lifecycletester/lifecycletester.component';
import { TemplateComponent } from './template/template.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DataTableComponent } from './data-table/data-table.component';
import { NumbersComponent } from './numbers/numbers.component';
import { GrandparentComponent } from './grandparent/grandparent.component';
import { UsersComponent } from './users/users.component';

type Box = {
  r: number;
  g: number;
  b: number;
  x: number;
  y: number;
  width: number;
  height: number;
};

@Component({
  selector: 'app-root',
  imports: [
    NumbersComponent,
    FooComponent,
    GrandparentComponent,
    UsersComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  counter: WritableSignal<number> = signal(10);

  doubleCounter: Signal<number> = computed(() => {
    console.log('Runnning doubleCounter signal');
    return this.counter() * 2;
  });

  valueDetection = 'change-detection';

  randomNumber: number = Math.round(Math.random() * 255);
  visible: boolean = false;
  usersOne: string[] = ['Marcin'];

  value = 'lorem ipsumik';
  coords: Coords[] = [];
  boxses: Box[] = [];

  isLogged: boolean | null = null;

  left = 100;
  top = 700;
  myChange: number = 0;
  myRandomNumbers: number[] = [];
  isActive = true;
  shouldBeVisable = false;
  values: number[] = [1, 2, 3, 4, 5];
  title = 'agnular-course';
  users: { id: number; name: string }[] = [
    { id: 1, name: 'Marcin' },
    { id: 2, name: 'Magda' },
  ];
  valuesOfDetection: number[] = [];

  numbers: number[] = [];

  constructor() {
    // effect((onCleanup) => {
    //   document.title = this.counter().toString();
    //   const interval = setInterval(() => {
    //     console.log(`TICK`);
    //   }, this.counter() * 10);
    //   // console.log(`Counter value ${this.counter()}`);
    //   onCleanup(() => {
    //     clearInterval(interval);
    //   });
    // });
  }

  reset() {
    this.counter.set(1000);
  }
  increase() {
    this.counter.update((prev) => prev + 1);
  }

  decrease() {
    this.counter.update((prev) => prev - 1);
  }

  changeIt() {
    this.myChange = Math.round(Math.random() * 255);
  }

  addToTheTab() {
    this.myRandomNumbers.push(this.myChange);
    console.log('myRamdon', this.myChange);
  }

  toggleVisablity() {
    this.visible = !this.visible;
  }

  addUsers() {
    // this.usersOne.push((Math.random() * 100000).toFixed(2));
    this.usersOne = [...this.usersOne, (Math.random() * 100000).toFixed(2)];
  }

  changeValue() {
    this.value = 'Inna wartosc';
  }

  getName() {
    return 'Lorem ipsum z metody getName w appComponent';
  }

  trackUsersFn(index: number, user: { id: number; name: string }) {
    console.log('TRACK', index, user);
    return user.id;
  }

  formatOdd(odd: boolean) {
    if (odd) return 'is odd';
    return 'is even';
  }

  getStyles() {
    return {
      position: `absolute`,
      left: `${this.left}px`,
      top: `${this.top}px`,
    };
  }

  addBox() {
    const newBox: Box = {
      r: Math.round(Math.random() * 255),
      g: Math.round(Math.random() * 255),
      b: Math.round(Math.random() * 255),
      x: Math.round(Math.random() * 255),
      y: Math.round(Math.random() * 255),
      width: Math.round(Math.random() * 255) + 100,
      height: Math.round(Math.random() * 255) + 100,
    };
    this.boxses.push(newBox);
  }

  getStyles2(box: Box) {
    return {
      backgroundColor: `rgba(${box.r}, ${box.g}, ${box.b})`,
      height: `${box.height}px`,
      width: `${box.width}px`,
      left: `${box.x}px`,
      top: `${box.y}px`,
    };
  }

  handlewNewPosition(coords: Coords) {
    this.coords.push(coords);
  }

  changeName() {
    this.valueDetection = `Lorem ipsum`;
  }

  addNewValue() {
    const addNewValue = Math.round(Math.random() * 80);
    // this.valuesOfDetection.push(addNewValue);
    this.valuesOfDetection = [...this.valuesOfDetection, addNewValue];
  }

  addNewNumber() {
    const newValue = Math.round(Math.random() * 80);
    this.numbers.push(newValue);
  }

  handleNewValue(newValue: number) {
    this.numbers.push(newValue);
  }
}
