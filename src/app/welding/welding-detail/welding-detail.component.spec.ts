import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeldingDetailComponent } from './welding-detail.component';

describe('WeldingDetailComponent', () => {
  let component: WeldingDetailComponent;
  let fixture: ComponentFixture<WeldingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeldingDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeldingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
