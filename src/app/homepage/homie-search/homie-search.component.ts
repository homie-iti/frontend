import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { City } from 'src/app/_models/city';

@Component({
  selector: 'app-homie-search',
  templateUrl: './homie-search.component.html',
  styleUrls: ['./homie-search.component.css']
})
export class HomieSearchComponent implements OnInit {


  cityname:any
  citycover:any
  cityid:any 
   
  
  namevalue(name :any){
     this.cityname=name

for(let i=0; i<this.city.length;i++){
  if (this.city[i].name ==this.cityname)
  this.cityid=this.city[i]._id
  this.citycover=this.city[i].cover

}
  }

  city: City[]=[]
  constructor(private searchservice : CityService) { }

  ngOnInit(): void {
    this.searchservice.getCityByName().subscribe((res:any)=>{
      this.city=res
      console.log(this.city)
  })

} }
