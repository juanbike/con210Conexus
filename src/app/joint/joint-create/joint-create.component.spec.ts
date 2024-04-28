import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JointCreateComponent } from './joint-create.component';

describe('JointCreateComponent', () => {
  let component: JointCreateComponent;
  let fixture: ComponentFixture<JointCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JointCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JointCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
