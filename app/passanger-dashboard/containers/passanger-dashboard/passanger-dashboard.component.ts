import {Component, OnInit} from '@angular/core';
import {Passenger} from '../../models/passenger.interface'
import {PassangerDashboardService} from "../../passanger-dashboard.service";

@Component({
    selector: 'passanger-dashboard',
    templateUrl: './passanger-dashboard.component.html',
    styleUrls: ['./passanger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    constructor(private passangerService:PassangerDashboardService) {
    }

    ngOnInit() {
        this.passengers = this.passangerService.getPassangers();
    }

    handleRemove(event: Passenger) {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
            return passenger.id !== event.id
        });
    }

    handleEdit(event: Passenger) {
        this.passengers = this.passengers.map((passenger: Passenger) => {
            if (passenger.id === event.id) {
                return Object.assign({}, passenger, event);
            } else {
                return passenger;
            }
        });
    }


}
