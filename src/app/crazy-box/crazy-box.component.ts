import { Component, EventEmitter, Output } from '@angular/core';
import { Coords } from '../types';

@Component({
  selector: 'app-crazy-box',
  imports: [],
  templateUrl: './crazy-box.component.html',
  styleUrl: './crazy-box.component.scss',
})
export class CrazyBoxComponent {
  x: number = Math.round(Math.random() * 400);
  y: number = Math.round(Math.random() * 400);
  size: number = Math.round(Math.random() * 200) + 100;

  @Output() onNewPosition = new EventEmitter<Coords>();

  getStyles2() {
    return {
      left: `${this.x}px`,
      top: `${this.y}px`,
      width: `${this.size}px`,
      height: `${this.size}px`,
    };
  }

  handleHover() {
    console.log('hover działa!');

    this.x = Math.round(Math.random() * 400);
    this.y = Math.round(Math.random() * 400);

    this.onNewPosition.emit({ x: this.x, y: this.y });
  }
}
