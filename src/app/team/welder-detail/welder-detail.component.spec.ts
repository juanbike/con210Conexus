import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelderDetailComponent } from './welder-detail.component';

describe('WelderDetailComponent', () => {
  let component: WelderDetailComponent;
  let fixture: ComponentFixture<WelderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelderDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
