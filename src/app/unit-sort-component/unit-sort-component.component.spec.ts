import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitSortComponentComponent } from './unit-sort-component.component';

describe('UnitSortComponentComponent', () => {
  let component: UnitSortComponentComponent;
  let fixture: ComponentFixture<UnitSortComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitSortComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitSortComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
