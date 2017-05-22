import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptaComponent } from './adopta.component';

describe('AdoptaComponent', () => {
  let component: AdoptaComponent;
  let fixture: ComponentFixture<AdoptaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
