import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitFilterComponentComponent } from './unit-filter-component.component';

describe('UnitFilterComponentComponent', () => {
  let component: UnitFilterComponentComponent;
  let fixture: ComponentFixture<UnitFilterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitFilterComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
