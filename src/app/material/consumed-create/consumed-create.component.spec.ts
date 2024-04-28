import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumedCreateComponent } from './consumed-create.component';

describe('ConsumedCreateComponent', () => {
  let component: ConsumedCreateComponent;
  let fixture: ComponentFixture<ConsumedCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumedCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumedCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
