import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { Units } from 'src/app/_models/units';

@Component({
  selector: 'app-get-all-units',
  templateUrl: './get-all-units.component.html',
  styleUrls: ['./get-all-units.component.css'],
})
export class GetAllUnitsComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  units: any[] = [];
  ngOnInit(): void {
    this.adminService.getAll('units').subscribe((unitData) => {
      this.units = unitData.results;
      console.log(this.units);
    });
  }
}
