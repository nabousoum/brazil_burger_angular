import { TestBed } from '@angular/core/testing';

import { My.ServiceService } from './my.service.service';

describe('My.ServiceService', () => {
  let service: My.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(My.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
