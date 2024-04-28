import { TestBed } from '@angular/core/testing';

import { WeldingService } from './welding.service';

describe('WeldingService', () => {
  let service: WeldingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeldingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
