import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaColoriComponent } from './lista-colori.component';

describe('ListaColoriComponent', () => {
  let component: ListaColoriComponent;
  let fixture: ComponentFixture<ListaColoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaColoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaColoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
