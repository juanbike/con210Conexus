import { TestBed } from '@angular/core/testing';

import { HydrostaticService } from './hydrostatic.service';

describe('HydrostaticService', () => {
  let service: HydrostaticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HydrostaticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
