import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllUnitsComponent } from './get-all-units.component';

describe('GetAllUnitsComponent', () => {
  let component: GetAllUnitsComponent;
  let fixture: ComponentFixture<GetAllUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
