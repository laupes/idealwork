import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoluzioneComponent } from './soluzione.component';

describe('SoluzioneComponent', () => {
  let component: SoluzioneComponent;
  let fixture: ComponentFixture<SoluzioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoluzioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoluzioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
