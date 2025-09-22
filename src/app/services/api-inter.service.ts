import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiInterService {
  private http = inject(HttpClient);
  get<R>(url: string) {
    return this.http.get<R>(url);
  }
}
