import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetSingleUserComponent } from './users/get-single-user/get-single-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { GetAllUsersComponent } from './users/get-all-users/get-all-users.component';
import { AdminComponent } from './admin.component';

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
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
