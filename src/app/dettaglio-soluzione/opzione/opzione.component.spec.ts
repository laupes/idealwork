import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpzioneComponent } from './opzione.component';

describe('OpzioneComponent', () => {
  let component: OpzioneComponent;
  let fixture: ComponentFixture<OpzioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpzioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpzioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
