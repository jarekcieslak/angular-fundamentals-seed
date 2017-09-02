import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";

@Component({
    selector: 'passenger-form',
    templateUrl: './passenger-form.component.html',
    styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit {

    @Input()
    detail: Passenger;

    @Output()
    update: EventEmitter<Passenger> = new EventEmitter();


    public ngOnInit(): void {
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

    public handleSubmit(passenger: Passenger, isValid: boolean) {
        if (isValid) {
            this.update.emit(passenger);
        }
    }
}