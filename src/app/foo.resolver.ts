import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
export const fooResolver: ResolveFn<string> = (route, state) => {
  const http = inject(HttpClient);
  const router = inject(Router);
  return http
    .get<{
      name: string;
      weight: number;
    }>(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .pipe(
      map((data) => `${data.name} - ${data.weight}`),
      catchError(() => {
        return of(new RedirectCommand(router.createUrlTree(['/error'])));
      }),
    );
};
