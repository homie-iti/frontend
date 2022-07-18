import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitPaginationComponentComponent } from './unit-pagination-component.component';

describe('UnitPaginationComponentComponent', () => {
  let component: UnitPaginationComponentComponent;
  let fixture: ComponentFixture<UnitPaginationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitPaginationComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitPaginationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
