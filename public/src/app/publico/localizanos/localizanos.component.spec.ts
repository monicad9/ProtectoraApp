import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizanosComponent } from './localizanos.component';

describe('LocalizanosComponent', () => {
  let component: LocalizanosComponent;
  let fixture: ComponentFixture<LocalizanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
