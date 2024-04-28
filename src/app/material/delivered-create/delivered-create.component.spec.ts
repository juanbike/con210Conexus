import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredCreateComponent } from './delivered-create.component';

describe('DeliveredCreateComponent', () => {
  let component: DeliveredCreateComponent;
  let fixture: ComponentFixture<DeliveredCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveredCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveredCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
