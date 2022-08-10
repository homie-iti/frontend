import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GetdataService } from 'src/app/service/getdata.service';
import { City } from 'src/app/_models/city';

@Component({
  selector: 'app-city-cards',
  templateUrl: './city-cards.component.html',
  styleUrls: ['./city-cards.component.css'],
})
export class CityCardsComponent implements OnInit {
  // @Input() item: City;
  @Input('cityname') cityname: any;
  @Input('citycover') citycover: any;
  @Input('cityid') cityid: any;

  city: City[] = [];

  constructor(private searchservice: GetdataService) {}

  ngOnInit(): void {
    this.searchservice.getAllCities(`/recommendations?citiesNumber=10`).subscribe((res: any) => {
      this.city = res;
      console.log(this.city);
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: false,
  };
}
