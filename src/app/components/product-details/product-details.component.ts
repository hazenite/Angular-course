import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { map, switchMap } from 'rxjs';

type Pokemon = {
  name: string;
  weight: number;
};

@Component({
  selector: 'app-product-details',
  imports: [AsyncPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);
  product$ = this.route.paramMap.pipe(
    map((params) => params.get('productId')),
    switchMap((productId) =>
      this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${productId}`),
    ),
    map((pokemon) => `${pokemon.name} - ${pokemon.weight}`),
  );
}
