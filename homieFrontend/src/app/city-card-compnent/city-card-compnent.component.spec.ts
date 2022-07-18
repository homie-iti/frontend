import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCardCompnentComponent } from './city-card-compnent.component';

describe('CityCardCompnentComponent', () => {
  let component: CityCardCompnentComponent;
  let fixture: ComponentFixture<CityCardCompnentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityCardCompnentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityCardCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
