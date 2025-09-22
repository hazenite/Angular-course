import { Component, inject, signal } from '@angular/core';
import { ApiInterService } from '../services/api-inter.service';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-ip',
  imports: [AsyncPipe],
  templateUrl: './ip.component.html',
  styleUrl: './ip.component.scss',
})
export class IpComponent {
  private api = inject(ApiInterService);
  ip$ = signal<string>('');

  refresh() {
    this.api
      .get<{ ip: string }>('https://api.ipify.org?format=json')
      .pipe(map((data) => data.ip))
      .subscribe((value) => this.ip$.set(value));
  }
}
