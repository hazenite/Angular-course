import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private _isAuthenticated = signal<boolean>(false);
  private _isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this._isAuthenticated.asReadonly();
  public isAuthenticatedSubject = this._isAuthenticatedSubject.asObservable();
  logIn() {
    this._isAuthenticated.set(true);
  }

  logOut() {
    this._isAuthenticated.set(false);
  }

  logInSubject() {
    this._isAuthenticatedSubject.next(true);
  }

  logOutSubject() {
    this._isAuthenticatedSubject.next(false);
  }
}
