import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetdataService } from 'src/app/service/getdata.service';
import { Units } from 'src/app/_models/units';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.page.html',
  styleUrls: ['./unit.page.css'],
})
export class UnitPageComponent implements OnInit {
  constructor(
    private router: Router,
    private activate: ActivatedRoute,
    private unitser: GetdataService
  ) {}
  id: any = this.activate.snapshot.params['id'];

  units: Units[] = [];

  ngOnInit(): void {
    this.unitser.getAllCityUnits(`/units/${this.id}`).subscribe(
      (a) => {
        this.units = a.units;
        console.log(a);
      },
      (error) => {
        if (error) {
          this.router.navigateByUrl('/notfound');
        }
      }
    );
  }
}
