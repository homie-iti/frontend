import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from 'src/app/service/getdata.service';
import { Unitdetails } from 'src/app/_models/unitdetails';

@Component({
  selector: 'app-unit-description',
  templateUrl: './unit-description.component.html',
  styleUrls: ['./unit-description.component.css'],
})
export class UnitDescriptionComponent implements OnInit {
  constructor(
    private activate: ActivatedRoute,
    private unitser: GetdataService
  ) {}
  id: any = this.activate.snapshot.params['id'];
  unitDetails: string | undefined;

  ngOnInit(): void {
    this.unitser.getUnitDetails(`/units/${this.id}`).subscribe((a) => {
      this.unitDetails = a.unitInfo.description;

      // console.log(this.unitDetails);
    });
  }
}
