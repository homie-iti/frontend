import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomieInfoComponent } from './homie-info.component';

describe('HomieInfoComponent', () => {
  let component: HomieInfoComponent;
  let fixture: ComponentFixture<HomieInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomieInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomieInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
