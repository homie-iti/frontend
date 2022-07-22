import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { UserAboutComponent } from './user-about/user-about.component';
import { UserUnitListingComponent } from './user-unit-listing/user-unit-listing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    UserCardComponent,
    UserAboutComponent,
    UserUnitListingComponent,
    LoginComponent,
    SignUpComponent,
    UserProfileComponent,
    UserComponent,
  ],
  imports: [CommonModule],
  exports: [
    UserCardComponent,
    UserAboutComponent,
    UserUnitListingComponent,
    LoginComponent,
    SignUpComponent,
    UserProfileComponent,
  ],
})
export class UserModule {}
