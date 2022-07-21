import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitListingComponent } from './unit-listing.component';

describe('UnitListingComponent', () => {
  let component: UnitListingComponent;
  let fixture: ComponentFixture<UnitListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
