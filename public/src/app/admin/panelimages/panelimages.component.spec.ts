import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelimagesComponent } from './panelimages.component';

describe('PanelimagesComponent', () => {
  let component: PanelimagesComponent;
  let fixture: ComponentFixture<PanelimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
