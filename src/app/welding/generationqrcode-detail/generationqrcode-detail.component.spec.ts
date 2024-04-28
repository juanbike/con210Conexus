import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationqrcodeDetailComponent } from './generationqrcode-detail.component';

describe('GenerationqrcodeDetailComponent', () => {
  let component: GenerationqrcodeDetailComponent;
  let fixture: ComponentFixture<GenerationqrcodeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationqrcodeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationqrcodeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
