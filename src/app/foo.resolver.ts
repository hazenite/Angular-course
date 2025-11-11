import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { map } from 'rxjs';

export const fooResolver: ResolveFn<string> = (route, state) => {
  const http = inject(HttpClient);
  return http
    .get<{
      name: string;
      weight: number;
    }>(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .pipe(map((data) => `${data.name} - ${data.weight}`));
};
