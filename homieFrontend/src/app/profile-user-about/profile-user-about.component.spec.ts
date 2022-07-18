import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserAboutComponent } from './profile-user-about.component';

describe('ProfileUserAboutComponent', () => {
  let component: ProfileUserAboutComponent;
  let fixture: ComponentFixture<ProfileUserAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUserAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileUserAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
