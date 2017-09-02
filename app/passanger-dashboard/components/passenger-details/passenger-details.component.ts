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

    @Output()
    remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    editing: boolean = false;


    // Necessary to update local value
    onNameChange(value: string): void {
        console.log('changing name: ', value);
        this.details.fullName = value;
    }

    // We fire an event when user clicks remove passenger
    removePassenger(passenger: Passenger): void {
        this.remove.emit(this.details);
    }

    // we fire an event once user is done editing passenger
    toggleEdit(): void {
        if (this.editing) {
            this.edit.emit(this.details)
        }
        this.editing = !this.editing;
    }

    // we break two-way prototype inheritance binding.
    // We do that to really make one-way data flow work properly...
    // Actually... it's not bad to have here the reference but we want to update
    // parent component only when editing is finished.
    ngOnChanges(changes) {
        console.log('Changes happened: ', changes);
        if (changes.details) {
            this.details = Object.assign({}, changes.details.currentValue)
        }
    }

    ngOnInit(): void {
    }

    public goToPassenger() {
        this.view.emit(this.details);
    }
}
