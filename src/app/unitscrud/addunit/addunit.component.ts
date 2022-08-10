import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { GetdataService } from 'src/app/service/getdata.service';
import { City } from 'src/app/_models/city';



@Component({
  selector: 'app-addunit',
  templateUrl: './addunit.component.html',
  styleUrls: ['./addunit.component.css']
})
export class AddunitComponent implements OnInit {

  constructor(public data:GetdataService, public auth:AuthService) { }


  myform=new FormGroup({
    unit:new FormGroup({
      landlordId : new FormControl( ' '),
      cityId:new FormControl(' '),
      estateType:new FormControl("",Validators.required),
      numberOfResidents: new FormControl(0,Validators.required),
      allowedGender:new FormControl("", Validators.required),
      dailyPrice:new FormControl(0,Validators.required),
      isAvailable:new FormControl(false,Validators.required),
      isPetsAllowed:new FormControl(false,Validators.required),

      unitInfo:new FormGroup({
        description: new FormControl("", { validators:[
          Validators.required, 
          Validators.pattern("[a-zA-Z ]*")
        ]}),
        rooms: new FormControl(0,{ validators:[
          Validators.required, 
        ]}),
         bathrooms: new FormControl(0,{ validators:[
          Validators.required, 
        ]}),
        floor: new FormControl(0,{ validators:[
          Validators.required, 
        ]}),   
      }),

      address:new FormGroup({
        city: new FormControl(""),
        buildingNumber: new FormControl(0,{validators:[
          Validators.required, 
        ]}),
       streetName: new FormControl("",{validators:[
        Validators.required,
        Validators.pattern("^[a-z0-9\s]+") 
      ]}),      
      })


    })
  })

  cityName:string=""
  cityId:any

  

  getCityId(name:any){
    this.cityName=name.label
    console.log(this.cityName)

   for (let i=0; i<this.cityArray.length;i++){
    
    if(this.cityName==this.cityArray[i].name){
       this.cityId=this.cityArray[i]._id
    }

   }
   console.log(this.cityId)
  }

 


  save(){
        


    this.myform.controls.unit.value.cityId=this.cityId,
    this.myform.controls.unit.value.landlordId="41da0b86ae0fef497d2326cd"
  

    console.log(this.myform.controls.unit.value)
    this.data.addUnit(this.myform.controls.unit.value).subscribe(a=>{
      console.log(a);
    

      
      
    })


    


  }

  cityArray: City[]=[]
  ngOnInit(): void {
    this.data.getAllCities(`/cities`).subscribe((res: any) => {
      this.cityArray = res;
      console.log(this.cityArray);
    });

    
    }
  }

// }
