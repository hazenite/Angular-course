import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-displayer',
  imports: [],
  templateUrl: './name-displayer.component.html',
  styleUrl: './name-displayer.component.scss',
})
export class NameDisplayerComponent {
  @Input() name: string = '';

  displayName: string = '';

  showMyName() {
    this.displayName = this.name;
  }
}
