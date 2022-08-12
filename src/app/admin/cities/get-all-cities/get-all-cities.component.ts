import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { City } from 'src/app/_models/city';

@Component({
  selector: 'app-get-all-cities',
  templateUrl: './get-all-cities.component.html',
  styleUrls: ['./get-all-cities.component.css'],
})
export class GetAllCitiesComponent implements OnInit {
  constructor(private adminService: AdminService) {}
  cities: City[] = [];

  deleteCity(cityId: string, x: number) {
    this.adminService.deleteCity('cities/', cityId).subscribe((res: any) => {
      console.log(res);
      this.cities.splice(x, 1);
    });
  }
  ngOnInit(): void {
    this.adminService.getAll('cities').subscribe((cityData) => {
      this.cities = cityData;
      console.log(this.cities);
    });
  }
}
