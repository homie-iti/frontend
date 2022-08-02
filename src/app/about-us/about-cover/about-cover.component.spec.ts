import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCoverComponent } from './about-cover.component';

describe('AboutCoverComponent', () => {
  let component: AboutCoverComponent;
  let fixture: ComponentFixture<AboutCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
