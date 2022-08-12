import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css'],
})
export class AddCityComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) {}
  cityForm = new FormGroup({
    name: new FormControl(''),
    cover: new FormControl(''),
    units: new FormControl(''),
  });

  cityData: any;
  save() {
    this.cityData = this.cityForm.value;
    console.log(this.cityData);
    this.adminService.addCity('cities', this.cityData).subscribe((city) => {
      console.log(city);
      this.router.navigateByUrl('admin/all-cities');
    });
  }
  ngOnInit(): void {}
}
