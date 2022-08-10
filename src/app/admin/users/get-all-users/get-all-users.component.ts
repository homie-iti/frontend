import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css'],
})
export class GetAllUsersComponent implements OnInit {
  users: User[] = [];
  constructor(private adminService: AdminService) {}
  deleteUser(id: string | undefined, x: number) {
    this.adminService.deleteUser('users/', id).subscribe(() => {
      this.users.splice(x, 1);
    });
  }
  ngOnInit(): void {
    this.adminService.getAll('users').subscribe((usersData) => {
      console.log(usersData);
      this.users = usersData.results;
      console.log(this.users);
    });
  }
}
