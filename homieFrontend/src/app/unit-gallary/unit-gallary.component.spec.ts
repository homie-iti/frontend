import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitGallaryComponent } from './unit-gallary.component';

describe('UnitGallaryComponent', () => {
  let component: UnitGallaryComponent;
  let fixture: ComponentFixture<UnitGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitGallaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
