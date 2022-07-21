import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitPaginationComponent } from './unit-pagination.component';

describe('UnitPaginationComponent', () => {
  let component: UnitPaginationComponent;
  let fixture: ComponentFixture<UnitPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
