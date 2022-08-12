import { Component, Input, OnInit } from '@angular/core';
import { Dayjs } from 'dayjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css'],
})
export class PaymentInfoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    public authService: AuthService
  ) {}

  chosenDate!: { startDate: Dayjs; endDate: Dayjs };
  unitAvailable = false;
  availabilityErrorMessage: undefined | string;
  @Input() isAvailable!: boolean;
  @Input() landlordId!: any;
  isLoading = true;

  ngOnInit(): void {
    // console.log({
    //   userOnInit: this.authService.getUser(),
    // });

    const interval = setInterval(() => {
      if (this.isAvailable === false || this.isAvailable === true) {
        this.isLoading = false;
        // interval
        clearInterval(interval);
      }
    }, 100);
  }

  ngOnChange(): void {
    console.log({
      userOnChange: this.authService.getUser(),
    });
  }

  checkAvailability() {
    if (!this.isAvailable) {
      this.unitAvailable = false;
      return;
    }

    this.http
      .get(
        'https://homie-iti.herokuapp.com/contracts/unit/' +
          this.route.snapshot.params['id']
      )
      .subscribe({
        next: (contracts: any) => {
          console.log(contracts);

          const activeContracts = contracts.filter(
            (contract: any) => contract.state === 'active'
          );

          if (activeContracts.length === 0) {
            this.unitAvailable = true;
            return;
          }

          const isNotAvailable = activeContracts.some((contract: any) => {
            const isWantedStartBeforeContractStart =
              this.chosenDate.startDate.isBefore(contract.rentalStart);
            const isWantedStartAfterContractEnd =
              this.chosenDate.startDate.isAfter(contract.rentalEnd);

            const isWantedEndBeforeContractStart =
              this.chosenDate.endDate.isBefore(contract.rentalStart);
            const isWantedEndAfterContractEnd = this.chosenDate.endDate.isAfter(
              contract.rentalEnd
            );

            if (isWantedStartAfterContractEnd || isWantedEndBeforeContractStart)
              return true;

            return false;
          });
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  // checkDatesAndUpdateUI() {

  // }

  rentUnit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/login');
      return;
    }

    const formattedStartDate = this.chosenDate.startDate.toDate();
    const formattedEndDate = this.chosenDate.endDate.toDate();
    const daysCount =
      this.chosenDate.endDate.diff(this.chosenDate.startDate, 'day') + 1;

    const unitId = this.route.snapshot.params['id'];
    const bookingObject = {
      id: this.authService.getUser()._id,
      rentalStart: formattedStartDate,
      rentalEnd: formattedEndDate,
      days: daysCount,
      paymentMethod: 'paypal',
      state: 'active',
    };

    this.http
      .post(
        'https://homie-iti.herokuapp.com/book-unit/' + unitId,
        bookingObject
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
