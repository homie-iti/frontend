import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetdataService } from 'src/app/service/getdata.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  constructor(
    private userService: GetdataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  id: string = this.route.snapshot.params['id'];
  user: User = {};
  editUserForm!: FormGroup;
  file: any;

  // get userValues() {
  //   return this.editUserForm.controls;
  // }

  log() {
    console.log(this.editUserForm.controls);
  }

  updateUser(data: any) {
    this.userService
      .updateUserData('/users/', this.id, data)
      .subscribe((data) => {
        this.updateUserImage();
        console.log(data);
        this.router.navigateByUrl(`/users/${this.id}`);
      });
  }

  onImageSelected(event: any) {
    console.log(event);
    this.file = event.target.files;
  }

  updateUserImage() {
    if (this.file) {
      const formData = new FormData();
      formData.append('profile', this.file[0]);
      this.userService
        .updateUserImage('/users/profileImage/', this.id, formData)
        .subscribe((data) => {
          console.log(data);
        });
    }
  }

  landlordUnits: [] = [];
  _id = this.id;
  landlordData = { _id: this._id, landlordUnits: this.landlordUnits };
  changeLandlord(event: any) {
    console.log(event.target.checked);
    if (event.target.checked == true) {
      this.userService
        .addLandlord('/landlords', this.landlordData)
        .subscribe((data) => {
          console.log(data);
        });
    } else if (event.target.checked == false) {
      this.userService
        .deleteLandlord('/landlords/', this.id)
        .subscribe((data) => {
          console.log(data);
        });
    }
  }

  agentUnits: [] = [];
  agentData = { _id: this._id, agentUnits: this.agentUnits };
  changeAgent(event: any) {
    console.log(event.target.checked);
    if (event.target.checked == true) {
      this.userService.addAgent('/agents', this.agentData).subscribe((data) => {
        console.log(data);
      });
    } else if (event.target.checked == false) {
      this.userService.deleteLandlord('/agents/', this.id).subscribe((data) => {
        console.log(data);
      });
    }
  }

  ngOnInit(): void {
    this.userService.getUserDetails(this.id).subscribe((userData) => {
      console.log(userData);
      this.user = userData;
      this.editUserForm = new FormGroup({
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
        // national_id: new FormControl(userData.national_id, [
        //   Validators.required,
        // ]),
        gender: new FormControl(userData.gender, [Validators.required]),
        address: new FormGroup({
          city: new FormControl(userData.address.city, [Validators.required]),
          streetName: new FormControl(userData.address.streetName, [
            Validators.required,
          ]),
          buildingNumber: new FormControl(userData.address.buildingNumber, [
            Validators.required,
          ]),
        }),
        balance: new FormControl(userData.balance, [Validators.required]),
        isAgent: new FormControl(userData.isAgent),
        isLandlord: new FormControl(userData.isLandlord),
      });
    });
  }
}
