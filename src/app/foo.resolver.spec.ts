import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { fooResolver } from './foo.resolver';

describe('fooResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => fooResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
