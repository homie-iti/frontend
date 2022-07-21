import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUnitListingComponent } from './user-unit-listing.component';

describe('UserUnitListingComponent', () => {
  let component: UserUnitListingComponent;
  let fixture: ComponentFixture<UserUnitListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUnitListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserUnitListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
