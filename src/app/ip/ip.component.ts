import { Component, inject, signal } from '@angular/core';
import { ApiInterService } from '../services/api-inter.service';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';
import { CacheService } from '../services/cache.service';

@Component({
  selector: 'app-ip',
  imports: [AsyncPipe],
  templateUrl: './ip.component.html',
  styleUrl: './ip.component.scss',
})
export class IpComponent {
  private api = inject(ApiInterService);
  private cache = inject(CacheService);
  ip$ = signal<string>('');

  refresh() {
    this.api
      .get<{ ip: string }>('https://api.ipify.org?format=json')
      .pipe(map((data) => data.ip))
      .subscribe((value) => this.ip$.set(value));
  }

  reset() {
    this.ip$.set('');
  }

  clearCache() {
    this.cache.reset();
  }
}
