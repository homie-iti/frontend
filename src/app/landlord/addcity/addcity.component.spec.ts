import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcityComponent } from './addcity.component';

describe('AddcityComponent', () => {
  let component: AddcityComponent;
  let fixture: ComponentFixture<AddcityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
