import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  id: string = this.route.snapshot.params['id'];
  user: any = {};

  updateUserForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),

    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    phone: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    // address: new FormGroup({
    //   city: new FormControl('', [Validators.required]),
    //   streetName: new FormControl('', [Validators.required]),
    //   buildingNumber: new FormControl('', [Validators.required]),
    // }),
    balance: new FormControl('', [Validators.required]),
    isAgent: new FormControl(this.user.isAgent),
    isLandlord: new FormControl(this.user.isLandlord),
  });

  get userValues() {
    return this.updateUserForm.controls;
  }

  log() {
    console.log(this.updateUserForm.controls);
  }

  updateUser(data: any) {
    this.adminService.updateUserData(this.id, data).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('all-users');
    });
  }
  ngOnInit(): void {
    this.adminService.getUserById(this.id).subscribe((userData) => {
      console.log(userData);
      this.user = userData;
    });
  }
}
