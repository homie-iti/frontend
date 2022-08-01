import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from 'src/app/service/getdata.service';

@Component({
  selector: 'app-landlorddetails',
  templateUrl: './landlorddetails.component.html',
  styleUrls: ['./landlorddetails.component.css'],
})
export class LandlorddetailsComponent implements OnInit {
  constructor(
    private activate: ActivatedRoute,
    private unitser: GetdataService
  ) {}
  id: any = this.activate.snapshot.params['id'];
  unitLandlord: any = '';

  ngOnInit(): void {
    this.unitser.getUnitDetails(`/units/${this.id}`).subscribe((a) => {
      this.unitLandlord = a.landlordId;

      // console.log(this.unitLandlord);
    });
  }
}
