import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { User } from 'src/app/_models/user';

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
  user: User = {};
  updateUserForm!: FormGroup;
  get userValues() {
    return this.updateUserForm.controls;
  }

  log() {
    console.log(this.updateUserForm.controls);
  }

  updateUser(data: any) {
    this.adminService
      .updateUserData('users/', this.id, data)
      .subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl('admin/all-users');
      });
  }
  ngOnInit(): void {
    this.adminService.getUserById('users/', this.id).subscribe((userData) => {
      console.log(userData);
      this.user = userData;
      this.updateUserForm = new FormGroup({
        fullName: new FormControl(userData.fullName, [
          Validators.required,
          Validators.minLength(3),
        ]),

        email: new FormControl(userData.email, [
          Validators.required,
          Validators.email,
        ]),
        age: new FormControl(userData.age, [
          Validators.required,
          Validators.min(18),
        ]),
        phone: new FormControl(userData.phone, [Validators.required]),
        gender: new FormControl(userData.gender, [Validators.required]),
        // address: new FormGroup({
        //   city: new FormControl(userData.address.city, [Validators.required]),
        //   streetName: new FormControl(userData.address.streetName, [
        //     Validators.required,
        //   ]),
        //   buildingNumber: new FormControl(userData.address.buildingNumber, [
        //     Validators.required,
        //   ]),
        // }),
        balance: new FormControl(userData.balance, [Validators.required]),
        isAgent: new FormControl(userData.isAgent),
        isLandlord: new FormControl(userData.isLandlord),
      });
      // this.updateUserForm.get("isAgent")?.setValue
    });
  }
}
