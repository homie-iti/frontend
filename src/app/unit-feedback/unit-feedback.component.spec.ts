import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitFeedbackComponent } from './unit-feedback.component';

describe('UnitFeedbackComponent', () => {
  let component: UnitFeedbackComponent;
  let fixture: ComponentFixture<UnitFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
