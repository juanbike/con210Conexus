import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelderCreateComponent } from './welder-create.component';

describe('WelderCreateComponent', () => {
  let component: WelderCreateComponent;
  let fixture: ComponentFixture<WelderCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelderCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
