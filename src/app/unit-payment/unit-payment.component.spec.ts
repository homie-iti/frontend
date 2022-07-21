import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitPaymentComponent } from './unit-payment.component';

describe('UnitPaymentComponent', () => {
  let component: UnitPaymentComponent;
  let fixture: ComponentFixture<UnitPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
