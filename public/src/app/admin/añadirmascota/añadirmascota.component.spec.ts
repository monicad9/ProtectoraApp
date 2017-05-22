import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AñadirmascotaComponent } from './añadirmascota.component';

describe('AñadirmascotaComponent', () => {
  let component: AñadirmascotaComponent;
  let fixture: ComponentFixture<AñadirmascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AñadirmascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AñadirmascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
