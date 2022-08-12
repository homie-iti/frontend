import { Component, OnInit } from '@angular/core';

import {faDollarSign, faHeart, faPaw, faUser} from '@fortawesome/free-solid-svg-icons'
import { AuthService } from 'src/app/service/auth.service';
import { GetdataService } from 'src/app/service/getdata.service';
@Component({
  selector: 'app-user-unit-listing',
  templateUrl: './user-unit-listing.component.html',
  styleUrls: ['./user-unit-listing.component.css']
})
export class UserUnitListingComponent implements OnInit {
  faHeart = faHeart;
  faDollarSign = faDollarSign;
  faUser = faUser;
  faPaw = faPaw;
  // faHeart = faHeart;
  constructor(private user: AuthService, public data:GetdataService) { }

  userInfo: any;
  userId:any
  favoriteUnit:any

    

  ngOnInit(): void {
    this.userInfo = this.user.getUser();
    this.userId=this.user.getUser()._id
    console.log(this.userInfo)

    this.data
    .getAllCityUnits(`/users/${this.userId}/favorites`)
    .subscribe((a) => {
      console.log(a);

      this.favoriteUnit = a[0].favoriteUnits;
      console.log("favorite",this.favoriteUnit);
    });

    
  }

}
