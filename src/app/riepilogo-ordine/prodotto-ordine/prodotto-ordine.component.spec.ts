import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoOrdineComponent } from './prodotto-ordine.component';

describe('ProdottoOrdineComponent', () => {
  let component: ProdottoOrdineComponent;
  let fixture: ComponentFixture<ProdottoOrdineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdottoOrdineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdottoOrdineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
