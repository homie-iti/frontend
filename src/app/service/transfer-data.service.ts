import { Injectable } from '@angular/core';
import { Units } from '../_models/units';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {

  genderToTransfer:string=""
  petsToTransfer:boolean=false
  // maxPrice:number=0
  // minPrice:number=0

  estateType:string=""


  filteredUnits:Units[]=[]
  

  constructor() { }
}
