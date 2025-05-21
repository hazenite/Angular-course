import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss',
})
export class CarComponent {
  @Input() name: string = '';
  @Output() emitName = new EventEmitter<string>();

  emitNameOfCar() {
    console.log('nazwa', this.name);
    this.emitName.emit(this.name);
  }
}
