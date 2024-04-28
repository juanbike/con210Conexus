import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JointDetailComponent } from './joint-detail.component';

describe('JointDetailComponent', () => {
  let component: JointDetailComponent;
  let fixture: ComponentFixture<JointDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JointDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JointDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
