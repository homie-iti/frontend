import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['../../admin.component.css'],
})
export class AddUserComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) {}

  userForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),

    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),

    age: new FormControl('', [Validators.required, Validators.min(18)]),
    phone: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    national_id: new FormControl('', [Validators.required]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required]),
      streetName: new FormControl('', [Validators.required]),
      buildingNumber: new FormControl('', [Validators.required]),
    }),
    balance: new FormControl(0, [Validators.required]),
    isAgent: new FormControl(false),
    isLandlord: new FormControl(false),
  });

  log() {
    console.log(this.userForm.controls.password);
  }

  get userValues() {
    return this.userForm.controls;
  }

  users: User[] = [];
  addUser(user: any) {
    this.adminService.addUser('users', user).subscribe({
      next: (res: any) => {
        console.log(res);
        this.users.splice(0, 0, user);
        // this.router.navigateByUrl('users?page=2');

        this.router.navigateByUrl('users/' + res.id);
      },
    });
  }

  ngOnInit(): void {
    // this.adminService.getAllUsers().subscribe((usersData) => {
    //   console.log(usersData);
    //   this.users = usersData.results;
    //   console.log(this.users);
    // });
  }
}
