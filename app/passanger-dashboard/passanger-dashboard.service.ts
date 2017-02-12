import {Injectable} from "@angular/core";
import {Passenger} from "./models/passenger.interface";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
    constructor(private http: Http) {
    }

    requestOptions: RequestOptions = new RequestOptions({
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });

    getPassengers(): Observable<Passenger[]> {
        return this.http
            .get(PASSENGER_API, this.requestOptions)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

    updatePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http
            .put(`${PASSENGER_API}/${passenger.id}`, passenger)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

    deletePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http
            .delete(`${PASSENGER_API}/${passenger.id}`)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }


}