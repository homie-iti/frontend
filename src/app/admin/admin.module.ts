import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { GetAllUsersComponent } from './users/get-all-users/get-all-users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { GetSingleUserComponent } from './users/get-single-user/get-single-user.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    GetAllUsersComponent,
    AddUserComponent,
    EditUserComponent,
    GetSingleUserComponent,
  ],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule],
  exports: [
    AdminComponent,
    GetAllUsersComponent,
    AddUserComponent,
    EditUserComponent,
    GetSingleUserComponent,
  ],
})
export class AdminModule {}
