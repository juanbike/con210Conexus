import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeldingListComponent } from './welding-list.component';

describe('WeldingListComponent', () => {
  let component: WeldingListComponent;
  let fixture: ComponentFixture<WeldingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeldingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeldingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
