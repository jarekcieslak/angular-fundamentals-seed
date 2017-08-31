import {Component, Input, OnInit} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";

@Component({
    selector: 'passenger-form',
    templateUrl: './passenger-form.component.html',
    styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit {

    @Input()
    detail: Passenger;

    public ngOnInit(): void {
        console.warn('Witamy w komponencie');
    }

    public toggleCheckedIn(isCheckedIn: any) {
        if (isCheckedIn) {
            this.detail.checkInDate = Date.now();
            this.detail.checkedIn = isCheckedIn;
        } else {
            this.detail.checkInDate = null;
            this.detail.checkedIn = isCheckedIn;
        }
    }
}