import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoriComponent } from './colori.component';

describe('ColoriComponent', () => {
  let component: ColoriComponent;
  let fixture: ComponentFixture<ColoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
