import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrostaticDetailComponent } from './hydrostatic-detail.component';

describe('HydrostaticDetailComponent', () => {
  let component: HydrostaticDetailComponent;
  let fixture: ComponentFixture<HydrostaticDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HydrostaticDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HydrostaticDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
