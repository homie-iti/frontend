import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitCardComponentComponent } from './unit-card-component.component';

describe('UnitCardComponentComponent', () => {
  let component: UnitCardComponentComponent;
  let fixture: ComponentFixture<UnitCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitCardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
