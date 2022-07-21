import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitSortingComponent } from './unit-sorting.component';

describe('UnitSortingComponent', () => {
  let component: UnitSortingComponent;
  let fixture: ComponentFixture<UnitSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitSortingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
