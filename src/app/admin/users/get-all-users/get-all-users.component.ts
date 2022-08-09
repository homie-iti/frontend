import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { Users } from 'src/app/_models/users';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css'],
})
export class GetAllUsersComponent implements OnInit {
  users: Users[] = [];
  constructor(private adminService: AdminService) {}
  deleteUser(id: any, x: number) {
    this.adminService.deleteUser(id).subscribe(() => {
      this.users.splice(x, 1);
    });
  }
  ngOnInit(): void {
    this.adminService.getAllUsers().subscribe((usersData) => {
      console.log(usersData);
      this.users = usersData.results;
      console.log(this.users);
    });
  }
}
