import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { NameDisplayerComponent } from './name-displayer/name-displayer.component';
import { ParentComponent } from './parent/parent.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DollarConverterComponent } from './dollar-converter/dollar-converter.component';
import { UsersComponent } from './users/users.component';
import { GrandparentComponent } from './grandparent/grandparent.component';
import { RandomNumberButtonComponent } from './random-number-button/random-number-button.component';
import { RandomNumbersComponent } from './random-numbers/random-numbers.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { NgIf, NgFor, NgClass, NgStyle } from '@angular/common';
import { FooComponent } from './foo/foo.component';
import { LazyComponent } from './lazy/lazy.component';

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
    // HelloComponent,
    // NameDisplayerComponent,
    // ParentComponent,
    // WelcomeComponent,
    // DollarConverterComponent,
    // UsersComponent,
    // GrandparentComponent,
    // RandomNumberButtonComponent,
    // RandomNumbersComponent,
    // CarsComponent,
    NgIf,
    NgFor,
    NgClass,
    NgStyle,
    FooComponent,
    LazyComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  boxses: Box[] = [];

  isLogged: boolean | null = null;

  left = 100;
  top = 700;

  isActive = false;
  shouldBeVisable = false;
  values: number[] = [1, 2, 3, 4, 5];
  title = 'agnular-course';
  users: { id: number; name: string }[] = [
    { id: 1, name: 'Marcin' },
    { id: 2, name: 'Magda' },
  ];

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
}
