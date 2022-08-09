import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSingleUserComponent } from './get-single-user.component';

describe('GetSingleUserComponent', () => {
  let component: GetSingleUserComponent;
  let fixture: ComponentFixture<GetSingleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSingleUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSingleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
