import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const isAuth = auth.isAuth();

  return isAuth || new RedirectCommand(router.createUrlTree(['/error']));
};
