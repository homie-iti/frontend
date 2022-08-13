import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { Admin } from 'src/app/_models/admin';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['../../admin.component.css'],
})
export class AddAdminComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) {}

  adminForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),

    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),

    age: new FormControl('', [Validators.required, Validators.min(18)]),
    phone: new FormControl('', [Validators.required]),
    national_id: new FormControl('', [Validators.required]),
  });

  log() {
    console.log(this.adminForm.controls.password);
  }

  get adminValues() {
    return this.adminForm.controls;
  }

  admins: Admin[] = [];
  addAdmin(admin: any) {
    this.adminService.addAdmin('admins', admin).subscribe({
      next: (res: any) => {
        console.log(res);
        this.router.navigateByUrl('admin/all-admins');
      },
    });
  }

  ngOnInit(): void {}
}
