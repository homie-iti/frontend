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

  ngOnInit(): void {
    this.adminService.getAll('contracts').subscribe((contractData) => {
      this.contracts = contractData.results;
      console.log(this.contracts);
    });
  }
}
