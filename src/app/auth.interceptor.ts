import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  if (auth.acessToken) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${auth.acessToken}`),
    });

    return next(authReq);
  }
  return next(req);
};
