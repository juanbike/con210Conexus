import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrostaticCreateComponent } from './hydrostatic-create.component';

describe('HydrostaticCreateComponent', () => {
  let component: HydrostaticCreateComponent;
  let fixture: ComponentFixture<HydrostaticCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HydrostaticCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HydrostaticCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
