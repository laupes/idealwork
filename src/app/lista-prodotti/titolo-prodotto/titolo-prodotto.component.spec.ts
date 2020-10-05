import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitoloProdottoComponent } from './titolo-prodotto.component';

describe('TitoloProdottoComponent', () => {
  let component: TitoloProdottoComponent;
  let fixture: ComponentFixture<TitoloProdottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitoloProdottoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitoloProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
