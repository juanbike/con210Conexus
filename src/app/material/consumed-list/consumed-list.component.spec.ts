import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumedListComponent } from './consumed-list.component';

describe('ConsumedListComponent', () => {
  let component: ConsumedListComponent;
  let fixture: ComponentFixture<ConsumedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
