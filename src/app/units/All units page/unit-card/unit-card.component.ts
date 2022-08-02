import { ChangeDetectionStrategy, Component, OnInit, SimpleChange } from '@angular/core';
import { GetdataService } from 'src/app/service/getdata.service';
import { Units } from 'src/app/_models/units';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, provideRoutes } from '@angular/router';
import { TransferDataService } from 'src/app/service/transfer-data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-unit-card',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class UnitCardComponent implements OnInit {
  page: number = 1;
  faHeart = faHeart;
  emp: any;


  constructor(
    private activate: ActivatedRoute,
    private unitser: GetdataService,
    public transfer:TransferDataService,
    private SpinnerService: NgxSpinnerService
  ) {


  }
  id: any = this.activate.snapshot.params['id'];

  units: Units[] =[]




  ngOnInit(): void {
    this.SpinnerService.show();
    this.unitser.getAllCityUnits(`/cities/${this.id}`).subscribe((a) => {
      this.units = a.units;
      console.log(a.units);

      // for( let i =0; i<this.units.length ;i++){
      //   if(this.units[i].allowedGender=="male"){
      //     this.filterdArray.push(this.units[i])
      //   }
      //  }
      //  console.log(this.filterdArray)

   this.SpinnerService.hide();
    });


  

  }


  
   
  



  }

