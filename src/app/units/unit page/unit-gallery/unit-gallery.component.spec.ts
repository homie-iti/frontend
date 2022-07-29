import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitGalleryComponent } from './unit-gallery.component';

describe('UnitGalleryComponent', () => {
  let component: UnitGalleryComponent;
  let fixture: ComponentFixture<UnitGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
