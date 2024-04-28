import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorCreateComponent } from './inspector-create.component';

describe('InspectorCreateComponent', () => {
  let component: InspectorCreateComponent;
  let fixture: ComponentFixture<InspectorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectorCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
