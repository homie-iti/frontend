import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitFilterComponent } from './unit-filter.component';

describe('UnitFilterComponent', () => {
  let component: UnitFilterComponent;
  let fixture: ComponentFixture<UnitFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
