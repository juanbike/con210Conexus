import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectCreateComponent } from './proyect-create.component';

describe('ProyectCreateComponent', () => {
  let component: ProyectCreateComponent;
  let fixture: ComponentFixture<ProyectCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
