import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetdataService } from 'src/app/service/getdata.service';

@Component({
  selector: 'app-editunit',
  templateUrl: './editunit.component.html',
  styleUrls: ['./editunit.component.css'],
})
export class EditunitComponent implements OnInit {
  constructor(public data: GetdataService) {}

  save() {
    console.log(this.myform.controls['unit'].value);
    this.data.updateUnit(this.myform.controls['unit'].value).subscribe((a) => {
      console.log('upadated', a);
    });
  }

  cityName: string = '';
  cityId: any;
  cityArray: any[] = [];

  myform!: FormGroup;

  ngOnInit(): void {
    this.data.getAllCities(`/cities`).subscribe((res: any) => {
      this.cityArray = res;
      console.log(this.cityArray);
    });

    this.data
      .getUnitDetails(`/units/c0ecfa717176997fb6b52e9c`)
      .subscribe((a) => {
        console.log(a);

        this.cityName = a.address.city;
        console.log(this.cityName);
        for (let i = 0; i < this.cityArray.length; i++) {
          if (this.cityName == this.cityArray[i].name) {
            this.cityId = this.cityArray[i]._id;
          }
        }
        console.log(this.cityId);

        this.myform = new FormGroup({
          unit: new FormGroup({
            // landlordId : new FormControl("41da0b86ae0fef497d2326cd"),
            estateType: new FormControl(a.estateType, Validators.required),
            numberOfResidents: new FormControl(
              a.numberOfResidents,
              Validators.required
            ),
            // allowedGender:new FormControl(a.allowedGender, Validators.required),
            dailyPrice: new FormControl(a.dailyPrice, Validators.required),
            isAvailable: new FormControl(a.isAvailable, Validators.required),
            isPetsAllowed: new FormControl(
              a.isPetsAllowed,
              Validators.required
            ),

            unitInfo: new FormGroup({
              description: new FormControl(a.unitInfo.description, {
                validators: [Validators.required],
              }),
              rooms: new FormControl(a.unitInfo.rooms, {
                validators: [Validators.required],
              }),
              bathrooms: new FormControl(a.unitInfo.bathrooms, {
                validators: [Validators.required],
              }),
              floor: new FormControl(a.unitInfo.floor, {
                validators: [Validators.required],
              }),
            }),

            address: new FormGroup({
              city: new FormControl(a.address.city),
              buildingNumber: new FormControl(a.address.buildingNumber, {
                validators: [Validators.required],
              }),
              streetName: new FormControl(a.address.streetName, {
                validators: [
                  Validators.required,
                  Validators.pattern('^[a-z0-9s]+'),
                ],
              }),
            }),
          }),
        });
      });
  }
}
