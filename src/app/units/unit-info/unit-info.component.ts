import { Component, OnInit } from '@angular/core';
import {faToilet , faKitchenSet,faShower,faParking,faCouch,faTemperatureArrowUp , faTree,faWifi,faBed,faElevator,faWheelchair,faHouseLock,faTv,faMusic,faSmoking,faPaw} from "@fortawesome/free-solid-svg-icons"


@Component({
  selector: 'app-unit-info',
  templateUrl: './unit-info.component.html',
  styleUrls: ['./unit-info.component.css']
})
export class UnitInfoComponent implements OnInit {

  faToilet=faToilet;
  faKitchenSet=faKitchenSet;
  faShower=faShower;
  faParking=faParking;
  faCouch=faCouch;
  faTemperatureArrowUp=faTemperatureArrowUp;
  faTree=faTree;
  faWifi=faWifi;
  faBed=faBed;
  faElevator=faElevator;
  faTv=faTv;
  faHouseLock=faHouseLock;
  faWheelchair=faWheelchair;
  faMusic=faMusic;
  faSmoking=faSmoking;
  faPaw=faPaw;
  constructor() { }

  ngOnInit(): void {
  }

}
