import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeldingCreateComponent } from './welding-create.component';

describe('WeldingCreateComponent', () => {
  let component: WeldingCreateComponent;
  let fixture: ComponentFixture<WeldingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeldingCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeldingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
