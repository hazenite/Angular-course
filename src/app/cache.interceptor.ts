import { HttpInterceptorFn } from '@angular/common/http';
import { of, tap } from 'rxjs';
import { CacheService } from './services/cache.service';
import { inject } from '@angular/core';

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  const { url } = req;

  const cache = inject(CacheService);
  const valueFromCache = cache.read(url);

  if (valueFromCache) {
    console.log(`reading cache for ${url}`);
    return of(valueFromCache);
  }
  return next(req).pipe(
    tap((Response) => {
      console.log(`set cache for ${url}`);

      cache.save(req.url, Response);
    }),
  );
};
