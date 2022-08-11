import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { GetdataService } from 'src/app/service/getdata.service';
import { City } from 'src/app/_models/city';
// import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addunit',
  templateUrl: './addunit.component.html',
  styleUrls: ['./addunit.component.css'],
})
export class AddunitComponent implements OnInit {
  constructor(
    public data: GetdataService,
    public authService: AuthService,
    private router: Router
  ) {}

  myform = new FormGroup({
    unit: new FormGroup({
      landlordId: new FormControl(' '),
      cityId: new FormControl(' '),
      estateType: new FormControl('', Validators.required),
      numberOfResidents: new FormControl(0, Validators.required),
      allowedGender: new FormControl('', Validators.required),
      dailyPrice: new FormControl(0, Validators.required),
      isAvailable: new FormControl(false, Validators.required),
      isPetsAllowed: new FormControl(false, Validators.required),

      unitInfo: new FormGroup({
        description: new FormControl('', {
          validators: [Validators.required, Validators.pattern('[a-zA-Z ]*')],
        }),
        rooms: new FormControl(0, { validators: [Validators.required] }),
        bathrooms: new FormControl(0, { validators: [Validators.required] }),
        floor: new FormControl(0, { validators: [Validators.required] }),
      }),

      address: new FormGroup({
        city: new FormControl(''),
        buildingNumber: new FormControl(0, {
          validators: [Validators.required],
        }),
        streetName: new FormControl('', {
          validators: [Validators.required, Validators.pattern('^[a-z0-9s]+')],
        }),
      }),
    }),
  });

  cityName: string = '';
  cityId: any;

  getCityId(event: any) {
    // console.log(event.target);
    // console.log(event.target.value);

    this.cityName = event.target.value;
    console.log(this.cityName);
    // console.log(name);

    for (let i = 0; i < this.cityArray.length; i++) {
      if (this.cityName == this.cityArray[i].name) {
        this.cityId = this.cityArray[i]._id;
      }
    }
    console.log(this.cityId);
  }

  save() {
    this.myform.controls.unit.value.cityId = this.cityId;
    console.log(this.cityId);
    console.log(this.myform.controls.unit.value.cityId);

    this.myform.controls.unit.value.landlordId = this.authService.getUser()._id;

    console.log(this.myform.controls.unit.value);
    this.data
      .addUnit(this.myform.controls.unit.value)
      .subscribe((creationResult) => {
        console.log(creationResult);
        this.router.navigateByUrl('/unit/' + creationResult.id);
      });
  }

  cityArray: City[] = [];
  ngOnInit(): void {
    this.data.getAllCities(`/cities`).subscribe((res: any) => {
      this.cityArray = res;
      console.log(this.cityArray);
    });
  }
}

// }
