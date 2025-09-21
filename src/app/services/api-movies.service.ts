import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

  private API_URL = environment.API_URL;

  private handleError<R>() {
    return (error: HttpErrorResponse): Observable<R> => {
      return of({} as R);
    };
  }

  get<R>(url: string): Observable<R> {
    return this.http
      .get<R>(`${this.API_URL}${url}`)
      .pipe(retry(3), catchError(this.handleError<R>()));
  }
}
