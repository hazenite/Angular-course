import { HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache = new Map<string, HttpEvent<unknown>>();

  constructor() {}

  read(key: string) {
    return this.cache.get(key);
  }

  save(key: string, response: HttpEvent<unknown>) {
    this.cache.set(key, response);
  }

  clear(key: string) {
    this.cache.delete(key);
  }

  reset() {
    this.cache.clear();
  }
}
