import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { GetdataService } from 'src/app/service/getdata.service';

@Component({
  selector: 'app-landlorddetails',
  templateUrl: './landlorddetails.component.html',
  styleUrls: ['./landlorddetails.component.css'],
})
export class LandlorddetailsComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private activate: ActivatedRoute,
    private unitser: GetdataService
  ) {}
  id: any = this.activate.snapshot.params['id'];
  unitLandlord: any = '';

  userId = this.auth.getUser()?._id;

  isAvailable!: boolean;

  ngOnInit(): void {
    this.unitser.getUnitDetails(`/units/${this.id}`).subscribe((a) => {
      console.log({ a });

      this.unitLandlord = a.landlordId;
      this.isAvailable = a.isAvailable;

      console.log(this.unitLandlord);
    });
  }
}
