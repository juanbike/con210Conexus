import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrostaticListComponent } from './hydrostatic-list.component';

describe('HydrostaticListComponent', () => {
  let component: HydrostaticListComponent;
  let fixture: ComponentFixture<HydrostaticListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HydrostaticListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HydrostaticListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
