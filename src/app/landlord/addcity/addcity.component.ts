import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetdataService } from 'src/app/service/getdata.service';
import { City } from 'src/app/_models/city';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent implements OnInit {


  myForm=new FormGroup({
    landlordId: new FormControl(null)

  })

  constructor(public cityServ: GetdataService) { }

  
  city: City[] = [];

  ngOnInit(): void {
    this.cityServ.getAllCities(`/cities`).subscribe((res: any) => {
      this.city = res;
      console.log(this.city);
    });
  }

  onSumbit(){
    console.log(this.myForm)
  }

}
