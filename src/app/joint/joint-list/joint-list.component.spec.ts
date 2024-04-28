import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JointListComponent } from './joint-list.component';

describe('JointListComponent', () => {
  let component: JointListComponent;
  let fixture: ComponentFixture<JointListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JointListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JointListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
