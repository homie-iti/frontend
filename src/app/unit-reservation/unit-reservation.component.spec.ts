import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitReservationComponent } from './unit-reservation.component';

describe('UnitReservationComponent', () => {
  let component: UnitReservationComponent;
  let fixture: ComponentFixture<UnitReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
