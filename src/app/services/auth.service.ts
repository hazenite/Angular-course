import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = inject(ApiService);
  acessToken: string = '';
  register() {
    this.api
      .post<
        { email: string; password: string },
        { accessToken: string }
      >('http://localhost:8000/register', { email: 'a@a.pl', password: 'password' })
      .subscribe((response) => {
        this.acessToken = response.accessToken;
      });
  }
  login() {
    this.api
      .post<
        { email: string; password: string },
        { accessToken: string }
      >('http://localhost:8000/login', { email: 'a@a.pl', password: 'password' })
      .subscribe((response) => {
        this.acessToken = response.accessToken;
      });
  }
}
