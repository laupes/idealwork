import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitoloPaginaComponent } from './titolo-pagina.component';

describe('TitoloPaginaComponent', () => {
  let component: TitoloPaginaComponent;
  let fixture: ComponentFixture<TitoloPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitoloPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitoloPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
