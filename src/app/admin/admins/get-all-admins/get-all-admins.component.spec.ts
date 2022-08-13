import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllAdminsComponent } from './get-all-admins.component';

describe('GetAllAdminsComponent', () => {
  let component: GetAllAdminsComponent;
  let fixture: ComponentFixture<GetAllAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllAdminsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
