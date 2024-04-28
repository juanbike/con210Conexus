import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumedDetailComponent } from './consumed-detail.component';

describe('ConsumedDetailComponent', () => {
  let component: ConsumedDetailComponent;
  let fixture: ComponentFixture<ConsumedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumedDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
