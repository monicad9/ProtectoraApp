import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarvoluntariosComponent } from './editarvoluntarios.component';

describe('EditarvoluntariosComponent', () => {
  let component: EditarvoluntariosComponent;
  let fixture: ComponentFixture<EditarvoluntariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarvoluntariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarvoluntariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
