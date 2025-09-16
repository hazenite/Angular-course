import { TestBed } from '@angular/core/testing';

import { ValuesServiceService } from './values-service.service';

describe('ValuesServiceService', () => {
  let service: ValuesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValuesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
