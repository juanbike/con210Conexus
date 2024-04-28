import { TestBed } from '@angular/core/testing';

import { ClientlService } from './clientl.service';

describe('ClientlService', () => {
  let service: ClientlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
