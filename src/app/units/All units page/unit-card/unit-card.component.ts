import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/service/getdata.service';
import { Units } from 'src/app/_models/units';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unit-card',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.css'],
})
export class UnitCardComponent implements OnInit {
  page: number = 1;
  faHeart = faHeart;
  constructor(
    private activate: ActivatedRoute,
    private unitser: GetdataService
  ) {}
  id: any = this.activate.snapshot.params['id'];

  units: Units[] = [];

  ngOnInit(): void {
    this.unitser.getAllCityUnits(`/cities/${this.id}`).subscribe((a) => {
      this.units = a.units;
      console.log(a);
    });
  }
}
