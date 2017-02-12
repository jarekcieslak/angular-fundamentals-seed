import {Component, OnInit} from '@angular/core';
import {Passenger} from '../../models/passenger.interface'

@Component({
    selector: 'passanger-dashboard',
    templateUrl: './passanger-dashboard.component.html',
    styleUrls: ['./passanger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    constructor() {
    }

    ngOnInit() {
        this.passengers = [
            {
                id: 1,
                fullName: 'Hodornowa',
                checkedIn: true,
                checkInDate: 1486117624520,
                children: [{name: 'Johnny', age: 12}]
            },
            {
                id: 2,
                fullName: 'Melanie Brooks',
                checkedIn: true,
                checkInDate: 1486117624525,
                children: [{name: 'Johnny', age: 12}]
            },
            {
                id: 3,
                fullName: 'Jonny Cage',
                checkedIn: false,
                checkInDate: null,
                children: [{name: 'Johnny', age: 12}, {name: 'Johnny', age: 12}, {name: 'Johnny', age: 12}]
            },
            {
                id: 4,
                fullName: 'Liu Kang',
                checkedIn: true,
                checkInDate: 1486117624525,
                children: [{name: 'Johnny', age: 12}]
            }
        ];
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
