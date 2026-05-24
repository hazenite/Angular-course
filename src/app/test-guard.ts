import { CanMatchFn } from '@angular/router';

export const testGuard: CanMatchFn = (route, segments) => {
  const random = Math.random();
  return random > 0.5 ? true : false;
};
