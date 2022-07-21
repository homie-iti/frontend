import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComonentsComponent } from './login-comonents.component';

describe('LoginComonentsComponent', () => {
  let component: LoginComonentsComponent;
  let fixture: ComponentFixture<LoginComonentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComonentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComonentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
