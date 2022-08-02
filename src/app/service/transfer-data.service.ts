import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {

  genderToTransfer:string=""
  filteredUnits:[]=[]
  

  constructor() { }
}
