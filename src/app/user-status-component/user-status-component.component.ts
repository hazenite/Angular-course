import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-user-status-component',
  imports: [AsyncPipe],
  templateUrl: './user-status-component.component.html',
  styleUrl: './user-status-component.component.scss',
})
export class UserStatusComponentComponent {
  // status!: Signal<'zalogowany' | 'niezalogowany'>;

  // constructor(private authService: AuthServiceService) {
  //   this.status = computed(() =>
  //     this.authService.isAuthenticated() ? 'zalogowany' : 'niezalogowany'

  //   );
  // }

  private authService = inject(AuthServiceService);

  status = computed(() =>
    this.authService.isAuthenticated() ? 'zalogowany' : 'niezalogowany'
  );
  statusSubject = this.authService.isAuthenticatedSubject.pipe(
    map((isAuth) => (isAuth ? 'zalogowany' : 'niezalogowany'))
  );
}
