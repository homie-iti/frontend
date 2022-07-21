import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitDescriptionComponent } from './unit-description.component';

describe('UnitDescriptionComponent', () => {
  let component: UnitDescriptionComponent;
  let fixture: ComponentFixture<UnitDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
