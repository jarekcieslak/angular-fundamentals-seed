import {Component, OnInit} from '@angular/core';
import {Passenger} from '../../models/passenger.interface'
import {PassengerDashboardService} from "../../passanger-dashboard.service";

@Component({
    selector: 'passanger-dashboard',
    templateUrl: './passanger-dashboard.component.html',
    styleUrls: ['./passanger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    constructor(private passengerService: PassengerDashboardService) {
    }

    ngOnInit() {
        this.passengerService.getPassengers().subscribe((data: Passenger[]) => this.passengers = data);
    }

    handleRemove(event: Passenger) {
        this.passengerService.deletePassenger(event)
            .subscribe((data: Passenger) => {
                this.passengers = this.passengers.filter((passenger: Passenger) => {
                    return passenger.id !== event.id
                });
            })
    }

    handleEdit(event: Passenger) {
        this.passengerService.updatePassenger(event)
            .subscribe((data: Passenger) => {

                this.passengers = this.passengers.map((passenger: Passenger) => {
                    if (passenger.id === event.id) {
                        return Object.assign({}, passenger, event);
                    } else {
                        return passenger;
                    }
                });
            });


    }


}
