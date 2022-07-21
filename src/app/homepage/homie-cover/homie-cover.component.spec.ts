import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomieCoverComponent } from './homie-cover.component';

describe('HomieCoverComponent', () => {
  let component: HomieCoverComponent;
  let fixture: ComponentFixture<HomieCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomieCoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomieCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
