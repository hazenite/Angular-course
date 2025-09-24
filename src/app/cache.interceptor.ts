import { HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { of, tap } from 'rxjs';
const cache = new Map<string, HttpEvent<unknown>>();

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
const { url } = req;
const valueFromCache = cache.get(url)

if(valueFromCache) {
  console.log(`reading cache for ${url}`)
return of(valueFromCache)
}
  return next(req).pipe(tap((Response) => {
      console.log(`set cache for ${url}`)

    cache.set(req.url, Response)
  })
  );
}
