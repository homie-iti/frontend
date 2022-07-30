import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWishListComponent } from './user-wish-list.component';

describe('UserWishListComponent', () => {
  let component: UserWishListComponent;
  let fixture: ComponentFixture<UserWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWishListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
