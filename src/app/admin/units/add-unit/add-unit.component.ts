import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { Units } from 'src/app/_models/units';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['../../admin.component.css'],
})
export class AddUnitComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) {}

  unitForm = new FormGroup({
    landlordId: new FormControl('', [Validators.required]),
    cityId: new FormControl('', [Validators.required]),
    estateType: new FormControl('', Validators.required),
    numberOfResidents: new FormControl('', Validators.required),
    allowedGender: new FormControl('', Validators.required),
    dailyPrice: new FormControl('', Validators.required),
    cover: new FormControl('', Validators.required),
    isAvailable: new FormControl(false, Validators.required),
    isPetsAllowed: new FormControl(false, Validators.required),
    unitInfo: new FormGroup({
      description: new FormControl('', {
        validators: [Validators.required, Validators.pattern('[a-zA-Z ]*')],
      }),
      rooms: new FormControl('', { validators: [Validators.required] }),
      bathrooms: new FormControl('', { validators: [Validators.required] }),
      floor: new FormControl('', { validators: [Validators.required] }),
    }),

    address: new FormGroup({
      city: new FormControl(''),
      buildingNumber: new FormControl('', {
        validators: [Validators.required],
      }),
      streetName: new FormControl('', {
        validators: [Validators.required, Validators.pattern('^[a-z0-9s]+')],
      }),
    }),
  });

  get unitValues() {
    return this.unitForm.controls;
  }

  log() {
    console.log(this.unitForm.controls);
  }

  // file: any;
  // onFileSelected(event: any) {
  //   // console.log(event);
  //   // this.file = event.target.files[0].name.toString();
  //   // console.log(this.file);
  // }

  // uploadUnitCover() {
  //   if (this.file) {
  //     const formData = new FormData();
  //     formData.append('UnitCover', this.file);
  //     this.adminService
  //       .uploadUnitCover('units/cover', formData)
  //       .subscribe((res: any) => {
  //         console.log(res);
  //       });
  //   }
  // }

  units: Units[] = [];
  addUnit(unit: any) {
    // const formData = new FormData();
    // formData.append('unitCover', this.unitForm.get('cover').value);
    // console.log(formData)
    this.adminService.addUnit('units', unit).subscribe({
      next: (res: any) => {
        console.log(res);
        this.units.splice(0, 0, unit);
        // this.router.navigateByUrl('users?page=2');

        this.router.navigateByUrl('units/' + res.id);
      },
    });
  }

  file: any;
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      // this.unitForm.patchValue({
      //   coverSource: cover,
      // });
      console.log(this.file);
    }
  }

  // onSubmit() {
  //   let formData = this.unitForm;
  //   const uploadData = new FormData();
  //   formData.append('unitCover', this.file);
  //   // formData.append('landlordId');

  //   // this.adminService.addUnit("units",this.unitForm.controls.value,formData)
  // }
  ngOnInit(): void {}
}
