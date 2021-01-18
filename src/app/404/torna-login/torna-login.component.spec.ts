import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TornaLoginComponent } from './torna-login.component';

describe('TornaLoginComponent', () => {
  let component: TornaLoginComponent;
  let fixture: ComponentFixture<TornaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TornaLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TornaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
