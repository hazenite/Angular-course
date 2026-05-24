import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private _isAuth = signal<boolean>(true);
  idAuth = this._isAuth.asReadonly();
  constructor() {}
}
