import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroreservasComponent } from './libroreservas.component';

describe('LibroreservasComponent', () => {
  let component: LibroreservasComponent;
  let fixture: ComponentFixture<LibroreservasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroreservasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroreservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
