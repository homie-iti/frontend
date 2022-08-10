import { Component, Input, OnInit } from '@angular/core';
import { Dayjs } from 'dayjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../../service/auth.service';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css'],
})
export class PaymentInfoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  chosenDate!: { startDate: Dayjs; endDate: Dayjs };
  unitAvailable = false;

  ngOnInit(): void {
    console.log({
      userOnInit: this.authService.getUser(),
    });
  }

  ngOnChange(): void {
    console.log({
      userOnChange: this.authService.getUser(),
    });
  }

  checkAvailability() {
    const formattedStartDate = this.chosenDate.startDate.toDate();
    const formattedEndDate = this.chosenDate.endDate.toDate();
    const daysCount =
      this.chosenDate.endDate.diff(this.chosenDate.startDate, 'day') + 1;
    console.log({
      formattedStartDate,
      formattedEndDate,
      daysCount,
    });
    this.getAllContracts();

    console.log({
      userCheck: this.authService.getUser(),
    });
  }

  getAllContracts() {
    this.http
      .get(
        'https://homie-iti.herokuapp.com/contracts/unit/' +
          this.route.snapshot.params['id']
      )
      .subscribe({
        next: (a) => {
          this.unitAvailable = true;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
