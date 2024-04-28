import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationqrcodeCreateComponent } from './generationqrcode-create.component';

describe('GenerationqrcodeCreateComponent', () => {
  let component: GenerationqrcodeCreateComponent;
  let fixture: ComponentFixture<GenerationqrcodeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationqrcodeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationqrcodeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
