import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserListingsComponent } from './profile-user-listings.component';

describe('ProfileUserListingsComponent', () => {
  let component: ProfileUserListingsComponent;
  let fixture: ComponentFixture<ProfileUserListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUserListingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileUserListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
