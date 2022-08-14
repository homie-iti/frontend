import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private router: Router,
    private authService: AuthService
  ) {}

  adminLoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  log() {
    console.log(this.adminLoginForm.controls.password);
  }

  get adminLoginValues() {
    return this.adminLoginForm.controls;
  }

  loginAdmin(adminData: any) {
    this.adminService.loginAdmin('login/admin', adminData).subscribe((res) => {
      console.log(res);
      this.authService.setToken((res as unknown as { token: string }).token);
      this.authService.setLoggedIn(true);
      // this.router.navigateByUrl('admin/profile');
      this.router.navigateByUrl('admin/all-admins');
    });
  }
  ngOnInit(): void {}
}
