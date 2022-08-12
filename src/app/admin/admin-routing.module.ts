import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetSingleUserComponent } from './users/get-single-user/get-single-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { GetAllUsersComponent } from './users/get-all-users/get-all-users.component';
import { AdminComponent } from './admin.component';
import { GetAllContractsComponent } from './contracts/get-all-contracts/get-all-contracts.component';
import { GetAllUnitsComponent } from './units/get-all-units/get-all-units.component';
import { GetAllCitiesComponent } from './cities/get-all-cities/get-all-cities.component';
import { GetAllReviewsComponent } from './reviews/get-all-reviews/get-all-reviews.component';
import { GetAllHelpQuestionsComponent } from './helpquestions/get-all-help-questions/get-all-help-questions.component';
import { AddUnitComponent } from './units/add-unit/add-unit.component';
import { AddCityComponent } from './cities/add-city/add-city.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },

  {
    path: 'all-users',
    component: GetAllUsersComponent,
  },
  {
    path: 'all-contracts',
    component: GetAllContractsComponent,
  },
  {
    path: 'all-units',
    component: GetAllUnitsComponent,
  },
  {
    path: 'all-cities',
    component: GetAllCitiesComponent,
  },
  {
    path: 'all-reviews',
    component: GetAllReviewsComponent,
  },
  {
    path: 'all-helpQuestions',
    component: GetAllHelpQuestionsComponent,
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
    path: 'add-unit',
    component: AddUnitComponent,
  },
  {
    path: 'add-city',
    component: AddCityComponent,
  },
  {
    path: 'edit-user/:id',
    component: EditUserComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
