import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCenterComponentComponent } from './info-center-component.component';

describe('InfoCenterComponentComponent', () => {
  let component: InfoCenterComponentComponent;
  let fixture: ComponentFixture<InfoCenterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCenterComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCenterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
