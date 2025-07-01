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
import { CrazyBoxComponent } from './crazy-box/crazy-box.component';
import { Coords } from './types';
import { ContainerComponent } from './container/container.component';
import { TitleComponent } from './title/title.component';
import { ConditionalContentComponent } from './conditional-content/conditional-content.component';
import { SnartComponentComponent } from './snart-component/snart-component.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { PageBodyComponent } from './page-body/page-body.component';
import { HomeworkComponentComponent } from './homework-component/homework-component.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { MyIpComponent } from './my-ip/my-ip.component';
import { LifecycletesterComponent } from './lifecycletester/lifecycletester.component';

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
  imports: [MyIpComponent, TitleComponent, LifecycletesterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  visible: boolean = false;
  usersOne: string[] = ['Marcin'];

  value = 'lorem ipsumik';
  coords: Coords[] = [];
  boxses: Box[] = [];

  isLogged: boolean | null = null;

  left = 100;
  top = 700;

  isActive = true;
  shouldBeVisable = false;
  values: number[] = [1, 2, 3, 4, 5];
  title = 'agnular-course';
  users: { id: number; name: string }[] = [
    { id: 1, name: 'Marcin' },
    { id: 2, name: 'Magda' },
  ];

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
}
