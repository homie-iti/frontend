import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faCity,
  faBuilding,
  faRoad,
  faHouseCircleExclamation,
  faHouse,
  faPaw,
  faPersonBooth,
  faBath,
  faFlorinSign,
} from '@fortawesome/free-solid-svg-icons';
import { GetdataService } from 'src/app/service/getdata.service';
import { Unitdetails } from 'src/app/_models/unitdetails';

@Component({
  selector: 'app-unit-info',
  templateUrl: './unit-info.component.html',
  styleUrls: ['./unit-info.component.css'],
})
export class UnitInfoComponent implements OnInit {
  faCity = faCity;
  faBath = faBath;
  faFlorinSign = faFlorinSign;
  faPersonBooth = faPersonBooth;
  faBuilding = faBuilding;
  faRoad = faRoad;
  faHouseCircleExclamation = faHouseCircleExclamation;
  faHouse = faHouse;
  faPaw = faPaw;
  constructor(
    private activate: ActivatedRoute,
    private unitser: GetdataService
  ) {}

  id: any = this.activate.snapshot.params['id'];
  unitAddress: any = '';
  isAvailable: boolean | undefined;
  isPetsAllowed: boolean | undefined;
  estateType: string | undefined;
  unitdetails: any = '';

  ngOnInit(): void {
    this.unitser.getUnitDetails(`/units/${this.id}`).subscribe((a) => {
      this.unitAddress = a.address;
      this.isAvailable = a.isAvailable;
      this.isPetsAllowed = a.isPetsAllowed;
      this.estateType = a.estateType;
      this.unitdetails = a.unitInfo;

      console.log(this.unitAddress);
      console.log(this.isAvailable);
      console.log(this.isPetsAllowed);
      console.log(this.estateType);
      console.log(this.unitdetails);
    });
  }
}
