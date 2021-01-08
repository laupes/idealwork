import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaParticolariComponent } from './categoria-particolari.component';

describe('CategoriaParticolariComponent', () => {
  let component: CategoriaParticolariComponent;
  let fixture: ComponentFixture<CategoriaParticolariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaParticolariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaParticolariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
