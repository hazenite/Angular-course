import { TestBed } from '@angular/core/testing';

import { ApiInterService } from './api-inter.service';

describe('ApiInterService', () => {
  let service: ApiInterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
