import { Component, inject, OnInit } from '@angular/core';
import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  map,
  mergeMap,
  switchMap,
} from 'rxjs';
import { ApiService } from '../../services/api.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
type TVShow = {
  id: string;
  name: string;
};
type TVShowResponse = {
  tv_shows: TVShow[];
};

@Component({
  selector: 'app-http-client',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.scss',
})
export class HttpClientComponent implements OnInit {
  search = new FormControl('');

  shows$ = this.search.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    switchMap((search) =>
      this.api.get<TVShowResponse>(`search?q=${search}&page=1`)
    ),
    map((response) => response?.tv_shows || [])
  );

  private api = inject(ApiService);

  ngOnInit(): void {
    // this.api
    //   .get<{ ip: string }>('format=json')
    //   .pipe(map((data) => data?.ip || 'no IP address'))
    //   .subscribe((ip) => console.log('ip1', ip));
  }
}
