import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  imports: [HelloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'agnular-course';
  users: string[] = ['A', 'B', 'C', 'D', 'E'];
  getName() {
    return 'Lorem ipsum z metody getName w appComponent';
  }
}
