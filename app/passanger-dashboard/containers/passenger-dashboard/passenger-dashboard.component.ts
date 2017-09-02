import {Component, OnInit} from '@angular/core';
import {Passenger} from '../../models/passenger.interface'
import {PassengerDashboardService} from "../../passenger-dashboard.service";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

@Component({
    selector: 'passenger-dashboard',
    templateUrl: './passenger-dashboard.component.html',
    styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    constructor(private passengerService: PassengerDashboardService,
                private router: Router) {
    }

    ngOnInit() {
        this.passengerService
            .getPassengers()
            .subscribe(
                (data: Passenger[]) => this.passengers = data,
                (error: any) => console.warn(error));
    }

    handleRemove(event: Passenger) {
        this.passengerService.deletePassenger(event)
            .subscribe(data => {
                this.passengers = this.passengers.filter((passenger: Passenger) => {
                    return passenger.id !== event.id
                });
            });
    }

    handleEdit(event: Passenger) {
        this.passengerService.updatePassenger(event)
            .subscribe((data: Passenger) => {
                this.passengers = this.passengers.map((passenger: Passenger) => {
                    if (passenger.id === event.id) {
                        passenger = Object.assign({}, passenger, event);
                    }
                    return passenger;
                });
            });


    }

    handleView(event: Passenger) {
        if (event) {
            this.router.navigate(['passengers', event.id]);
        }
    }


}
