import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { GetAllUsersComponent } from './users/get-all-users/get-all-users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { GetSingleUserComponent } from './users/get-single-user/get-single-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { GetAllContractsComponent } from './contracts/get-all-contracts/get-all-contracts.component';
import { AddContractComponent } from './contracts/add-contract/add-contract.component';
import { EditContractComponent } from './contracts/edit-contract/edit-contract.component';
import { GetAllUnitsComponent } from './units/get-all-units/get-all-units.component';
import { AddUnitComponent } from './units/add-unit/add-unit.component';
import { EditUnitComponent } from './units/edit-unit/edit-unit.component';
import { GetAllHelpQuestionsComponent } from './helpquestions/get-all-help-questions/get-all-help-questions.component';
import { EditHelpQuestionComponent } from './helpquestions/edit-help-question/edit-help-question.component';
import { AddHelpQuestionComponent } from './helpquestions/add-help-question/add-help-question.component';
import { AddCityComponent } from './cities/add-city/add-city.component';
import { EditCityComponent } from './cities/edit-city/edit-city.component';
import { GetAllReviewsComponent } from './reviews/get-all-reviews/get-all-reviews.component';
import { AddReviewComponent } from './reviews/add-review/add-review.component';
import { EditReviewComponent } from './reviews/edit-review/edit-review.component';
import { GetAllCitiesComponent } from './cities/get-all-cities/get-all-cities.component';
import { GetAllAdminsComponent } from './admins/get-all-admins/get-all-admins.component';
import { AddAdminComponent } from './admins/add-admin/add-admin.component';
import { AdminLoginComponent } from './admins/admin-login/admin-login.component';
import { AdminProfileComponent } from './admins/admin-profile/admin-profile.component';

@NgModule({
  declarations: [
    AdminComponent,
    GetAllUsersComponent,
    AddUserComponent,
    EditUserComponent,
    GetSingleUserComponent,
    GetAllContractsComponent,
    AddContractComponent,
    EditContractComponent,
    GetAllUnitsComponent,
    AddUnitComponent,
    EditUnitComponent,
    GetAllHelpQuestionsComponent,
    EditHelpQuestionComponent,
    AddHelpQuestionComponent,
    AddCityComponent,
    EditCityComponent,
    GetAllReviewsComponent,
    AddReviewComponent,
    EditReviewComponent,
    GetAllCitiesComponent,
    GetAllAdminsComponent,
    AddAdminComponent,
    AdminLoginComponent,
    AdminProfileComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, AdminRoutingModule],
  exports: [
    AdminComponent,
    GetAllUsersComponent,
    AddUserComponent,
    EditUserComponent,
    GetSingleUserComponent,
  ],
})
export class AdminModule {}
