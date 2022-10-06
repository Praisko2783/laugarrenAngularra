import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoHijocComponent } from './empleado-hijoc.component';

describe('EmpleadoHijocComponent', () => {
  let component: EmpleadoHijocComponent;
  let fixture: ComponentFixture<EmpleadoHijocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoHijocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoHijocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
