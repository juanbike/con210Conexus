import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationqrcodeListComponent } from './generationqrcode-list.component';

describe('GenerationqrcodeListComponent', () => {
  let component: GenerationqrcodeListComponent;
  let fixture: ComponentFixture<GenerationqrcodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationqrcodeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationqrcodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
