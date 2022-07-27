import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.page';
import { UnitPageComponent } from './units/unit page/unit.page/unit.page';
import { UnitsComponent } from './units/units.page';
import { LoginComponent } from './user/user registration page/login/login.component';
import { UserProfileComponent } from './user/user account/user-profile/user-profile.component';
// import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserComponent } from './user/user.page';

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
    path: 'city-example',
    component: UnitsComponent,
  },
  {
    path: 'unit-example',
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
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
