import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllReviewsComponent } from './get-all-reviews.component';

describe('GetAllReviewsComponent', () => {
  let component: GetAllReviewsComponent;
  let fixture: ComponentFixture<GetAllReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
