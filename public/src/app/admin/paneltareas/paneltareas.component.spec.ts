import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneltareasComponent } from './paneltareas.component';

describe('PaneltareasComponent', () => {
  let component: PaneltareasComponent;
  let fixture: ComponentFixture<PaneltareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaneltareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaneltareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
