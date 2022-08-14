import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { Dayjs } from 'dayjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../service/auth.service';
import { GetdataService } from '../../../service/getdata.service';
import { faChevronLeft } from '@fortAwesome/free-solid-svg-icons';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css'],
})
export class PaymentInfoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private getdataService: GetdataService,
    private http: HttpClient,
    public authService: AuthService
  ) {}

  faChevronLeft = faChevronLeft;

  chosenDate!: { startDate: Dayjs; endDate: Dayjs };
  unitAvailable = false;
  availabilityErrorMessage: undefined | string;
  @Input() isAvailable!: boolean;
  @Input() landlordId!: any;
  @Input() dailyPrice!: any;
  isLoading = true;
  daysCount: number = 0;

  isRented = false;
  isRentingError = false;
  isBalanceEnough: boolean = true;
  isUnitProposedByAgent = false;

  isUnitActiveNowByAgent = false;
  activeRentEnd = '';

  activeContractWithError!: any;

  ngOnInit(): void {
    // console.log({
    //   userOnInit: this.authService.getUser(),
    // });

    const loaders = {
      isAvailableDone: false,
      isGettingContractsDone: false,
    };

    const interval = setInterval(() => {
      if (this.isAvailable === false || this.isAvailable === true) {
        if (loaders.isGettingContractsDone) this.isLoading = false;
        else loaders.isAvailableDone = true;
        // interval
        clearInterval(interval);
      }
    }, 100);

    this.getContracts().subscribe({
      next: (contracts: any) => {
        this.isUnitProposedByAgent = contracts.some(
          (contract: any) =>
            contract.state === 'proposed' &&
            contract.agentId === this.authService.getUser()._id
        );

        if (this.isUnitProposedByAgent) return;

        // if(proposedContract)

        const activeContracts = contracts.filter(
          (contract: any) =>
            contract.state === 'active' &&
            contract.agentId === this.authService.getUser()._id
        );

        const today = dayjs();
        console.log({ today });

        const activeContractNowIndex = activeContracts.findIndex(
          (contract: any) =>
            today.isAfter(contract.rentalStart) &&
            today.isBefore(contract.rentalEnd)
        );

        this.isUnitActiveNowByAgent = 0 <= activeContractNowIndex;

        this.activeRentEnd = activeContracts[activeContractNowIndex]?.rentalEnd;

        // if (this.isUnitProposedByAgent) return;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        if (loaders.isAvailableDone) this.isLoading = false;
        else loaders.isGettingContractsDone = true;
      },
    });
  }

  noDateSelectedError = false;
  isChosenDayBeforeTodayError = false;

  ngOnChange(): void {
    console.log({
      userOnChange: this.authService.getUser(),
    });
  }

  checkAvailability() {
    this.activeContractWithError = undefined;
    // this.isChosenDayBeforeTodayError = false;

    if (!this.chosenDate.endDate) {
      this.noDateSelectedError = true;
      return;
    } else {
      this.noDateSelectedError = false;
    }

    if (this.chosenDate.startDate.isBefore(new Date())) {
      this.isChosenDayBeforeTodayError = true;
      return;
    } else {
      this.isChosenDayBeforeTodayError = false;
    }

    this.isLoading = true;

    this.daysCount =
      this.chosenDate.endDate.diff(this.chosenDate.startDate, 'day') + 1;

    this.isBalanceEnough =
      this.authService.getUser().balance >= this.dailyPrice * this.daysCount;

    // if (!this.isAvailable) {
    //   this.unitAvailable = false;
    //   return;
    // }

    this.getContracts().subscribe({
      next: (contracts: any) => {
        const activeContracts = contracts.filter(
          (contract: any) => contract.state === 'active'
        );

        console.log({ activeContracts });
        if (activeContracts.length === 0) {
          this.unitAvailable = true;
          // this.isNotAvailable = false;
          return;
        }

        this.unitAvailable = activeContracts.every((contract: any) => {
          const isWantedStartBeforeContractStart =
            this.chosenDate.startDate.isBefore(contract.rentalStart);
          const isWantedStartAfterContractStart =
            this.chosenDate.startDate.isAfter(contract.rentalStart);
          const isWantedStartBeforeContractEnd =
            this.chosenDate.startDate.isBefore(contract.rentalEnd);
          const isWantedStartAfterContractEnd =
            this.chosenDate.startDate.isAfter(contract.rentalEnd);
          const isWantedStartEqualsContractStart =
            this.chosenDate.startDate.isSame(contract.rentalStart);

          const isWantedEndBeforeContractStart =
            this.chosenDate.endDate.isBefore(contract.rentalStart);
          const isWantedEndAfterContractStart = this.chosenDate.endDate.isAfter(
            contract.rentalStart
          );
          const isWantedEndAfterContractEnd = this.chosenDate.endDate.isAfter(
            contract.rentalEnd
          );
          const isWantedEndBeforeContractEnd = this.chosenDate.endDate.isBefore(
            contract.rentalEnd
          );
          const isWantedEndEqualsContractEnd = this.chosenDate.endDate.isSame(
            contract.rentalEnd
          );

          let startIsInRange = false;
          let endIsInRange = false;

          if (isWantedStartAfterContractStart && isWantedStartBeforeContractEnd)
            startIsInRange = true;
          if (isWantedEndAfterContractStart && isWantedEndBeforeContractEnd)
            endIsInRange = true;

          if (isWantedStartEqualsContractStart) startIsInRange = true;
          if (isWantedEndEqualsContractEnd) endIsInRange = true;

          if (isWantedStartBeforeContractStart && isWantedEndAfterContractEnd) {
            startIsInRange = true;
            endIsInRange = true;
          }
          // if (isWantedStartBeforeContractStart && isWantedEndAfterContractEnd) {
          //   startIsInRange = true;
          //   endIsInRange = true;
          // }
          // console.log({
          //   startIsInRange,
          //   endIsInRange,
          //   isWantedStartAfterContractStart,
          //   isWantedStartBeforeContractEnd,
          //   isWantedEndAfterContractStart,
          //   isWantedEndBeforeContractEnd,
          // });
          if (!(!startIsInRange && !endIsInRange)) {
            this.activeContractWithError = contract;
          }
          return !startIsInRange && !endIsInRange;
          // if (isWantedStartAfterContractEnd || isWantedEndBeforeContractStart){

          //   return true;
          // }

          // return false;
        });

        // this.unitAvailable = !isNotAvailable;

        // this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        // this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  // checkDatesAndUpdateUI() {

  // }

  rentUnit() {
    this.isLoading = true;

    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/login');
      return;
    }

    const formattedStartDate = this.chosenDate.startDate
      .set('hour', 0)
      .set('minute', 0)
      .set('second', 0)
      .toDate();
    const formattedEndDate = this.chosenDate.endDate
      .set('hour', 23)
      .set('minute', 59)
      .set('second', 59)
      .toDate();

    const unitId = this.route.snapshot.params['id'];
    const bookingObject = {
      id: this.authService.getUser()._id,
      rentalStart: formattedStartDate,
      rentalEnd: formattedEndDate,
      days: this.daysCount,
      paymentMethod: 'paypal',
      state: 'proposed',
    };

    this.http
      .post(
        'https://homie-iti.herokuapp.com/book-unit/' + unitId,
        bookingObject
      )
      .subscribe({
        next: (data) => {
          this.isRented = true;
          this.updateUser();
          console.log(data);
        },
        error: (error) => {
          this.isRentingError = true;
          console.log(error);
          // if(error.error?.message.includes('balance')) isBalanceEnough
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }

  updateUser() {
    this.getdataService
      .getUserDetails(this.authService.getUser()._id)
      .subscribe((user) => {
        this.authService.setUser(user);
      });
  }

  getContracts() {
    return this.http.get(
      'https://homie-iti.herokuapp.com/contracts/unit/' +
        this.route.snapshot.params['id']
    );
  }
}
