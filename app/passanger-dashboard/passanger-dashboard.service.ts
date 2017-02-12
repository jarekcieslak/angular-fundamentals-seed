import {Injectable} from "@angular/core";
import {Passenger} from "./models/passenger.interface";

@Injectable()
export class PassangerDashboardService {
    constructor() {}

    getPassangers(): Passenger[] {
        return [
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
}