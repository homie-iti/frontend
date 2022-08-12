import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { Contract } from 'src/app/_models/contract';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css'],
})
export class AddContractComponent implements OnInit {
  constructor(private adminService: AdminService, private router: Router) {}

  contractForm = new FormGroup({
    unitId: new FormControl(''),
    agentId: new FormControl(''),
    landlordId: new FormControl(''),
    rentalStart: new FormControl(''),
    rentalEnd: new FormControl(''),
    paymentAmount: new FormControl(''),
    totalAmount: new FormControl(''),
    paymentMethod: new FormControl(''),
    // offerPercentage: new FormControl(''),
    state: new FormControl(''),
  });

  contractData: any;

  save() {
    (this.contractData = this.contractForm.value),
      console.log(this.contractData);
    this.adminService
      .addContract('contracts', this.contractData)
      .subscribe((contract) => {
        console.log(contract);
        this.router.navigateByUrl('admin/all-contracts');
      });
  }
  ngOnInit(): void {}
}
