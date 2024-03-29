import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
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
  maxPrice: number = 0;
  minPrice: number = 0;
  filter:string=""

  id: any = this.ac.snapshot.params['id'];
  unitArray = [];
  unit: any;


  //********* */ Gender filter/********* */
  genderArray:any[]=[]
  checkGender(event: any) {
    if (event.target.checked) {
      console.log(event.target.checked);
      this.genderArray.push(event.target.value);
      console.log(this.genderArray);
    } else {
      console.log(event.target.value);
      this.genderArray = this.genderArray.filter(
        (item) => item !== event.target.value
      );
      console.log(this.genderArray);
    }

    if (this.genderArray.length == 0) {
      this.transfer.filteredUnits = [];
      console.log(this.transfer.filteredUnits);
    }

    if (this.genderArray.length == 1) {
       this.unitser
        .filter(`/Homie/${this.id}/filter?gender=${this.genderArray[0]}`)
        .subscribe((a) => {
          this.transfer.filteredUnits = a.units;
          console.log(this.transfer.filteredUnits);
        });
    }

    if (this.genderArray.length == 2) {
      this.unitser
        .filter(
          `/Homie/${this.id}/filter?gender=${this.genderArray[0]}&gender=${this.genderArray[1]}`
        )
        .subscribe((a) => {
          this.transfer.filteredUnits = a.units;
          console.log(this.transfer.filteredUnits);
        });
    }

    if (this.genderArray.length == 3) {
      this.unitser
        .filter(
          `/Homie/${this.id}/filter?gender=${this.genderArray[0]}&gender=${this.genderArray[1]}&gender=${this.genderArray[2]}`
        )
        .subscribe((a) => {
          this.transfer.filteredUnits = a.units;
          console.log(this.transfer.filteredUnits);
        });
    }
  }








   //********* */ pets filter/********* */
 
  petsArray:any[]=[]
  checkPetsAllowed(event: any) {
    if (event.target.checked) {
      console.log(event.target.checked);
      this.petsArray.push(event.target.value);
      console.log(this.petsArray);
    } else {
      console.log(event.target.value);
      this.petsArray = this.petsArray.filter(
        (item) => item !== event.target.value
      );
      console.log(this.petsArray);
    }

    if (this.petsArray.length == 0) {
      this.transfer.filteredUnits = [];
      console.log(this.transfer.filteredUnits);
    }

    if (this.petsArray.length == 1) {
       this.unitser
        .filter(`/Homie/${this.id}/filter?petAllowed=${this.petsArray[0]}`)
        .subscribe((a) => {
          this.transfer.filteredUnits = a.units;
          console.log(this.transfer.filteredUnits);
        });
    }

    if (this.petsArray.length == 2) {
      this.unitser
        .filter(
          `/Homie/${this.id}/filter?petAllowed=${this.petsArray[0]}&petAllowed=${this.petsArray[1]}`
        )
        .subscribe((a) => {
          this.transfer.filteredUnits = a.units;
          console.log(this.transfer.filteredUnits);
        });
    }

   
  }




    //********* */ estate Type filter/********* */


  arrayOfChecked: any[] = [];

  onChange(event: any) {
    if (event.target.checked) {
      console.log(event.target.checked);
      this.arrayOfChecked.push(event.target.value);
      console.log(this.arrayOfChecked);
    } else {
      console.log(event.target.value);
      this.arrayOfChecked = this.arrayOfChecked.filter(
        (item) => item !== event.target.value
      );
      console.log(this.arrayOfChecked);
    }

    if (this.arrayOfChecked.length == 0) {
      this.transfer.filteredUnits = [];
      console.log(this.transfer.filteredUnits);
    }

    if (this.arrayOfChecked.length == 1) {
       this.unitser
        .filter(`/Homie/${this.id}/filter?estateType=${this.arrayOfChecked[0]}`)
        .subscribe((a) => {
          this.transfer.filteredUnits = a.units;
          console.log(this.transfer.filteredUnits);
        });
    }

    if (this.arrayOfChecked.length == 2) {
      this.unitser
        .filter(
          `/Homie/${this.id}/filter?estateType=${this.arrayOfChecked[0]}&estateType=${this.arrayOfChecked[1]}`
        )
        .subscribe((a) => {
          this.transfer.filteredUnits = a.units;
          console.log(this.transfer.filteredUnits);
        });
    }

    if (this.arrayOfChecked.length == 3) {
      this.unitser
        .filter(
          `/Homie/${this.id}/filter?estateType=${this.arrayOfChecked[0]}&estateType=${this.arrayOfChecked[1]}&estateType=${this.arrayOfChecked[2]}`
        )
        .subscribe((a) => {
          this.transfer.filteredUnits = a.units;
          console.log(this.transfer.filteredUnits);
        });
    }

    if (this.arrayOfChecked.length == 4) {
      this.unitser
        .filter(
          `/Homie/${this.id}/filter?estateType=${this.arrayOfChecked[0]}&estateType=${this.arrayOfChecked[1]}&estateType=${this.arrayOfChecked[2]}&estateType=${this.arrayOfChecked[3]}`
        )
        .subscribe((a) => {
          this.transfer.filteredUnits = a.units;
          console.log(this.transfer.filteredUnits);
        });
    }
  }

  checkMinPrice(price: any) {
    this.minPrice = price;
    console.log(this.minPrice);
    this.unitser
      .filter(`/Homie/${this.id}/filter?minPrice=${this.minPrice}`)
      .subscribe((a) => {
        this.transfer.filteredUnits = a.units;
        console.log(this.transfer.filteredUnits);
      });
  }

  checkMaxPrice(price: any) {
    this.maxPrice = price;
    console.log(this.maxPrice);
    this.unitser
      .filter(`/Homie/${this.id}/filter?maxPrice=${this.maxPrice}`)
      .subscribe((a) => {
        this.transfer.filteredUnits = a.units;
        console.log(this.transfer.filteredUnits);
      });
  }

  

  Range() {
    this.unitser
      .filter(
        `/Homie/${this.id}/filter?minPrice=${this.minPrice}&maxPrice=${this.maxPrice}`
      )
      .subscribe((a) => {
        this.transfer.filteredUnits = a.units;
        console.log(this.transfer.filteredUnits);
      });
  }

  selected!: { startDate: any; endDate: any };
  constructor(
    public ac: ActivatedRoute,
    public transfer: TransferDataService,
    public unitser: GetdataService
  ) {}

  ngOnInit(): void {}
}
