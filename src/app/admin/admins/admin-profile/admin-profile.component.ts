import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { AuthService } from 'src/app/service/auth.service';
import { Admin } from 'src/app/_models/admin';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css'],
})
export class AdminProfileComponent implements OnInit {
  constructor(private adminService: AdminService, private user: AuthService) {}

  admins: Admin[] = [];
  ngOnInit(): void {
    this.adminService.getAll('admins').subscribe((res) => {
      console.log(res);
      this.admins = res.results;
    });
  }
}
