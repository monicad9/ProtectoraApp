import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroacogidasComponent } from './libroacogidas.component';

describe('LibroacogidasComponent', () => {
  let component: LibroacogidasComponent;
  let fixture: ComponentFixture<LibroacogidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroacogidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroacogidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
