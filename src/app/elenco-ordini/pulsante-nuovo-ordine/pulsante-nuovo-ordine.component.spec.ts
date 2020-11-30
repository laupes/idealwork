import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsanteNuovoOrdineComponent } from './pulsante-nuovo-ordine.component';

describe('PulsanteNuovoOrdineComponent', () => {
  let component: PulsanteNuovoOrdineComponent;
  let fixture: ComponentFixture<PulsanteNuovoOrdineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulsanteNuovoOrdineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PulsanteNuovoOrdineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
