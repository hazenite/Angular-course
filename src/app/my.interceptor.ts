import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { LoggerService } from './services/logger.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';

export const myInterceptor: HttpInterceptorFn = (req, next) => {
  const logger = inject(LoggerService);
  logger.log(`[${req.method}] Request to ${req.url}`);
  return next(req).pipe(
    tap((Response) => {
      if (Response.type == HttpEventType.Response) {
        logger.log(`Response from ${Response.url}`);
      }
    })
  );
};
