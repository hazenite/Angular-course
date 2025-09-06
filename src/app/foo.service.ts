import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FooService {
  private value = Math.round(Math.random() * 100);

  constructor() {
    console.log('FooService is created');
  }

  getValue() {
    return this.value;
  }
}
