import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelindexComponent } from './panelindex.component';

describe('PanelindexComponent', () => {
  let component: PanelindexComponent;
  let fixture: ComponentFixture<PanelindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
