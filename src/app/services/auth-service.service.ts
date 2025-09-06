import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  public isAuthenticated = false;

  logIn() {
    this.isAuthenticated = true;
    console.log('blablab', this.isAuthenticated);
  }

  logOut() {
    this.isAuthenticated = false;
  }
}
