import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProiectosComponentComponent } from './proiectos.component.component';

describe('ProiectosComponentComponent', () => {
  let component: ProiectosComponentComponent;
  let fixture: ComponentFixture<ProiectosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProiectosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProiectosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
