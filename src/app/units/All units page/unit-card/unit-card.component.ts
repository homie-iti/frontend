import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/service/getdata.service';
import { Units } from 'src/app/_models/units';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, provideRoutes } from '@angular/router';
import { TransferDataService } from 'src/app/service/transfer-data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-unit-card',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.css'],
})
export class UnitCardComponent implements OnInit {
  page: number = 1;
  faHeart = faHeart;
  emp: any;
  constructor(
    private activate: ActivatedRoute,
    private unitser: GetdataService,
    private transfer:TransferDataService,
    private SpinnerService: NgxSpinnerService
  ) {}
  id: any = this.activate.snapshot.params['id'];

  units: Units[] = [];

  unitsFilter=this.transfer.filteredUnits

  ngOnInit(): void {
    this.SpinnerService.show();
    this.unitser.getAllCityUnits(`/cities/${this.id}`).subscribe((a) => {
      this.units = a.units;
      console.log(a);
      this.SpinnerService.hide();
    });
  

    
  }
}
