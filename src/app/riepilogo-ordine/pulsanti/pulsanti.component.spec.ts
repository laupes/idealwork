import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsantiComponent } from './pulsanti.component';

describe('PulsantiComponent', () => {
  let component: PulsantiComponent;
  let fixture: ComponentFixture<PulsantiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulsantiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PulsantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
