import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarvoluntariosComponent } from './registrarvoluntarios.component';

describe('RegistrarvoluntariosComponent', () => {
  let component: RegistrarvoluntariosComponent;
  let fixture: ComponentFixture<RegistrarvoluntariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarvoluntariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarvoluntariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
