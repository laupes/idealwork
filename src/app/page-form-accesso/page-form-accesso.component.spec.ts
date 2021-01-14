import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormAccessoComponent } from './page-form-accesso.component';

describe('PageFormAccessoComponent', () => {
  let component: PageFormAccessoComponent;
  let fixture: ComponentFixture<PageFormAccessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormAccessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormAccessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
