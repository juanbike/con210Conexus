import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorDetailComponent } from './inspector-detail.component';

describe('InspectorDetailComponent', () => {
  let component: InspectorDetailComponent;
  let fixture: ComponentFixture<InspectorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectorDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
