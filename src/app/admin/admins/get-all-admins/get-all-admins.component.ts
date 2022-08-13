import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { Admin } from 'src/app/_models/admin';

@Component({
  selector: 'app-get-all-admins',
  templateUrl: './get-all-admins.component.html',
  styleUrls: ['./get-all-admins.component.css'],
})
export class GetAllAdminsComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  deleteAdmin(id: string | undefined, x: number) {
    this.adminService.deleteAdmin('admins/', id).subscribe((res) => {
      console.log(res);
      this.admins.splice(x, 1);
    });
  }

  admins: Admin[] = [];
  ngOnInit(): void {
    this.adminService.getAll('admins').subscribe((adminsData) => {
      console.log(adminsData);
      this.admins = adminsData.results;
    });
  }
}
