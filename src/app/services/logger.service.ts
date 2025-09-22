import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(message: string) {
    const today = new Date();
    console.log(
      `[${today.toLocaleDateString()} - ${today.toLocaleTimeString()}] - ${message}`
    );
  }
}
