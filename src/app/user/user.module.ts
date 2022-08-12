import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCardComponent } from './user profile page/user-card/user-card.component';
import { UserAboutComponent } from './user profile page/user-about/user-about.component';
import { UserUnitListingComponent } from './user profile page/user-unit-listing/user-unit-listing.component';
import { LoginComponent } from './registration pages/login/login.component';
import { SignUpComponent } from './registration pages/sign-up/sign-up.component';
import { UserProfileComponent } from './user account/user-profile/user-profile.component';
import { UserComponent } from './user.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserWishListComponent } from './user-wish-list/user-wish-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetpasswordComponent } from './registration pages/forgetpassword/forgetpassword.component';
import { NewpasswordComponent } from './registration pages/newpassword/newpassword.component';
import { AppRoutingModule } from '../app-routing.module';
import { LogoutComponent } from './registration pages/logout/logout.component';
import { ActivationPageComponent } from './registration pages/activation-page/activation-page.component';

@NgModule({
  declarations: [
    UserCardComponent,
    UserAboutComponent,
    UserUnitListingComponent,
    LoginComponent,
    SignUpComponent,
    UserProfileComponent,
    UserComponent,
    UserWishListComponent,
    ForgetpasswordComponent,
    NewpasswordComponent,
    LogoutComponent,
    ActivationPageComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    UserCardComponent,
    UserAboutComponent,
    UserUnitListingComponent,
    LoginComponent,
    SignUpComponent,
    UserProfileComponent,
    LogoutComponent,
  ],
})
export class UserModule {}
