import {Component, Input} from '@angular/core'
import {Passenger} from '../../models/passenger.interface'

@Component({
    selector: 'passenger-count',
    template: `<h3>Airline passengers!</h3>
    Total checked in: {{checkedInCount()}} / {{items.length}}`
})
export class PassengerCountComponent {
    @Input()
    items: Passenger[];

    checkedInCount(): number {
        if (!this.items) {
            return;
        }

        return this.items.filter((passanger: Passenger) => passanger.checkedIn).length;
    }
}
