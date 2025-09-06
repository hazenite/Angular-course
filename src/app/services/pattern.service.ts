import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
export class PatternService {
  private differnece = Math.round(Math.random() * 90 + 10);

  getNextValue(previousValue: number) {
    return previousValue + this.differnece;
  }
}
