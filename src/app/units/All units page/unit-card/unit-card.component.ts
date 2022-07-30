import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/service/getdata.service';
import { Units } from 'src/app/_models/units';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-unit-card',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.css'],
})
export class UnitCardComponent implements OnInit {
  faHeart = faHeart;
  constructor(private unitser: GetdataService) {}

  units: Units[] = [];
  ngOnInit(): void {
    this.unitser.getAllUnits().subscribe((a) => {
      this.units = a.units;
      console.log(this.units);
    });
  }
}
