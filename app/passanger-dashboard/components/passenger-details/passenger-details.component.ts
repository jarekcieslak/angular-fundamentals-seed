import {Component, Input, Output, EventEmitter, OnChanges, OnInit} from '@angular/core'
import {Passenger} from '../../models/passenger.interface';

@Component({
    selector: 'passenger-details',
    templateUrl: './passenger-details.component.html',
    styleUrls: ['./passenger-details.component.scss']
})
export class PassengerDetailsComponent implements OnChanges, OnInit {

    @Input()
    details: Passenger;
    editing: boolean = false;

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    @Output()
    edit: EventEmitter<any> = new EventEmitter();


    // Necessary to update local value
    onNameChange(value: string): void {
        this.details.fullName = value;
    }

    // We fire an event when user clicks remove passenger
    removePassenger(passenger: Passenger): void {
        this.remove.emit(this.details);
    }

    // we fire an event once user is done editing passenger
    toggleEdit(): void {
        if (this.editing) {
            console.log('fired!');
            this.edit.emit(this.details)
        }
        this.editing = !this.editing;
    }


    // unnecessary lifecycle hook
    ngOnInit() {
    }

    // we break two-way prototype inheritance binding. We do that to really make one-way data flow work!
    ngOnChanges(changes) {
        if (changes.details) {
            this.details = Object.assign({}, changes.details.currentValue)
        }
    }
}
