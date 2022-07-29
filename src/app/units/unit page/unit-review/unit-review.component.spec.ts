import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitReviewComponent } from './unit-review.component';

describe('UnitReviewComponent', () => {
  let component: UnitReviewComponent;
  let fixture: ComponentFixture<UnitReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
