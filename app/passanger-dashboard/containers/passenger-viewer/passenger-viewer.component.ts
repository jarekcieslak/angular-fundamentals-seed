import {Component, OnInit} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";
import {PassengerDashboardService} from "../../passenger-dashboard.service";
import {ActivatedRoute, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap'

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['./passenger-viewer.component.scss'],
    templateUrl: './passenger-viewer.component.html'
})
export class PassengerViewerComponent implements OnInit {
    passenger: Passenger;

    constructor(private passengerService: PassengerDashboardService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params
            .switchMap((data: any) => this.passengerService.getPassenger(data.id))
            .subscribe(data => this.passenger = data);
    }


    public onUpdatePassenger(passenger: Passenger) {

        this.passengerService.updatePassenger(passenger)
            .subscribe(data => this.passenger = Object.assign({}, this.passenger, data));
    }
}