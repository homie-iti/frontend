import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.page';
import { UserWishListComponent } from './user/user-wish-list/user-wish-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.page';
import { UnitPageComponent } from './units/unit page/unit.page/unit.page';
import { UnitsComponent } from './units/units.page';
import { LoginComponent } from './user/registration pages/login/login.component';
import { UserProfileComponent } from './user/user account/user-profile/user-profile.component';
// import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserComponent } from './user/user.page';
import { SignUpComponent } from './user/registration pages/sign-up/sign-up.component';
import { AddunitComponent } from './unitscrud/addunit/addunit.component';
import { AdminComponent } from './admin/admin.component';
import { GetAllUsersComponent } from './admin/users/get-all-users/get-all-users.component';
import { GetSingleUserComponent } from './admin/users/get-single-user/get-single-user.component';
import { AddUserComponent } from './admin/users/add-user/add-user.component';
import { EditUserComponent } from './admin/users/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'unit/:id',
    component: UnitPageComponent,
  },
  {
    path: 'profile-example',
    component: UserComponent,
  },
  {
    path: 'user-settings-example',
    component: UserProfileComponent,
  },
  {
    path: 'user-wish-list',
    component: UserWishListComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'units/:id',
    component: UnitsComponent,
  },
  {
    path: 'addCity',
    component: AddunitComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'all-users',
    component: GetAllUsersComponent,
  },
  {
    path: 'users/:id',
    component: GetSingleUserComponent,
  },
  {
    path: 'add-user',
    component: AddUserComponent,
  },
  {
    path: 'edit-user/:id',
    component: EditUserComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
