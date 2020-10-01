import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaricaAppComponent } from './scarica-app.component';

describe('ScaricaAppComponent', () => {
  let component: ScaricaAppComponent;
  let fixture: ComponentFixture<ScaricaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaricaAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaricaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
