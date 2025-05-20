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

@Component({
  selector: 'app-root',
  imports: [
    HelloComponent,
    NameDisplayerComponent,
    ParentComponent,
    WelcomeComponent,
    DollarConverterComponent,
    UsersComponent,
    GrandparentComponent,
    RandomNumberButtonComponent,
    RandomNumbersComponent,
  ],
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
