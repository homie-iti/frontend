import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitInfoComponent } from './unit-info.component';

describe('UnitInfoComponent', () => {
  let component: UnitInfoComponent;
  let fixture: ComponentFixture<UnitInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
