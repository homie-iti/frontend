import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { GetdataService } from 'src/app/service/getdata.service';
import { TransferDataService } from 'src/app/service/transfer-data.service';
// import { Dayjs } from 'ngx-daterangepicker-material';

@Component({
  selector: 'app-unit-filter',
  templateUrl: './unit-filter.component.html',
  styleUrls: ['./unit-filter.component.css'],
})
export class UnitFilterComponent implements OnInit {
  faSearchengin = faSearchengin;
  faBell = faBell;
    
  id: any = this.ac.snapshot.params['id'];

  save(gender:any){
    this.transfer.genderToTransfer=gender
     if(this.transfer.genderToTransfer){
      this.unitser.filterGender(`/Homie/${this.id}/filter?gender=${this.transfer.genderToTransfer}`).subscribe((a) => {
        this.transfer.filteredUnits= a.units;
        console.log(this.transfer.filteredUnits);
      });
    }
  }


  

  selected!: { startDate: any; endDate: any };
  constructor( public ac:ActivatedRoute ,
     public transfer:TransferDataService, 
     public unitser : GetdataService) {}

  ngOnInit(): void {

   

  }

}
