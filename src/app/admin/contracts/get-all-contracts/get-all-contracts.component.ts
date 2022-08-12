import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { Contract } from 'src/app/_models/contract';

@Component({
  selector: 'app-get-all-contracts',
  templateUrl: './get-all-contracts.component.html',
  styleUrls: ['./get-all-contracts.component.css'],
})
export class GetAllContractsComponent implements OnInit {
  contracts: Contract[] = [];
  constructor(private adminService: AdminService) {}

  deleteContract(contractId: any, unitId: any, x: number) {
    return this.adminService
      .deleteContract(contractId, unitId)
      .subscribe((a) => {
        console.log(a);
        this.contracts.splice(x, 1);
      });
  }

  ngOnInit(): void {
    this.adminService.getAll('contracts').subscribe((contractData) => {
      this.contracts = contractData.results;
      console.log(this.contracts);
    });
  }
}
