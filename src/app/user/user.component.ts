import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  api = inject(ApiService);
  auth = inject(AuthService);

  register() {
    this.auth.register();
  }

  login() {
    this.auth.login();
  }

  getElements() {
    this.api
      .get<{ id: string; title: string }[]>('http://localhost:8000/element')
      .subscribe();
  }
}
