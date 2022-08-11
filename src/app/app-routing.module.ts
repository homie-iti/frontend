import { ContactUsComponent } from './contact-us/contact-us.page';
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
import { LogoutComponent } from './user/registration pages/logout/logout.component';
import { EditunitComponent } from './unitscrud/editunit/editunit.component';

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
    path: 'logout',
    component: LogoutComponent,
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
    path: 'editUnit',
    component: EditunitComponent,
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
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
