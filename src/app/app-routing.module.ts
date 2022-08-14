import { HelpQuestionsComponent } from './help-questions/help-questions.page';
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
import { ActivationPageComponent } from './user/registration pages/activation-page/activation-page.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { PaymentComponent } from './paymentform/payment/payment.component';
import { UserBalanceComponent } from './user/user profile page/user-balance/user-balance.component';
import { ForgetpasswordComponent } from './user/registration pages/forgetpassword/forgetpassword.component';
import { NewpasswordComponent } from './user/registration pages/newpassword/newpassword.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
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
    path: 'help-questions',
    component: HelpQuestionsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login/forget-password',
    component: ForgetpasswordComponent,
  },
  {
    path: 'login/reset-password',
    component: NewpasswordComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'signup/activation',
    component: ActivationPageComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'user/profile',
    component: UserComponent,
  },
  {
    path: 'user/settings',
    component: UserProfileComponent,
  },
  {
    path: 'user/wishlist',
    component: UserWishListComponent,
  },
  {
    path: 'user/add-balance',
    component: PaymentComponent,
  },
  {
    path: 'user/add-balance/success',
    component: UserBalanceComponent,
  },
  {
    path: 'user/:id/edit',
    component: UserProfileComponent,
  },
  {
    path: 'city/:id',
    component: UnitsComponent,
  },
  {
    path: 'unit/new',
    component: AddunitComponent,
  },
  {
    path: 'unit/:id',
    component: UnitPageComponent,
  },
  {
    path: 'unit/:id/edit',
    component: EditunitComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  // {
  //   path: 'notFound',
  //   component: NotfoundComponent,
  // },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
