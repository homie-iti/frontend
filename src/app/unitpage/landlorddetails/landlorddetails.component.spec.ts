import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlorddetailsComponent } from './landlorddetails.component';

describe('LandlorddetailsComponent', () => {
  let component: LandlorddetailsComponent;
  let fixture: ComponentFixture<LandlorddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandlorddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandlorddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
