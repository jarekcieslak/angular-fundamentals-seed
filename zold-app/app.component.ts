import {Component} from '@angular/core';

interface Passenger {
    id: number,
    fullName: string,
    checkedIn?: boolean | null 
}


@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title:string;
    passengers:Passenger[];
    imageSource:string;
    name:string;

    constructor() {
        let test:string = null;

        this.title = "Ultimate Angular";
        this.imageSource = "img/logo.jpeg";
        this.passengers = [
            {
                id: 1,
                fullName: "John",
                checkedIn: null
            },
            {
                id: 2,
                fullName: "Jessica",
                checkedIn: true
            },
            {
                id: 3,
                fullName: "Jeremy",
                checkedIn: true
            },
            {
                id: 4,
                fullName: "Jake",
                checkedIn: false
            },
            {
                id: 5,
                fullName: "Jack",
                checkedIn: false
            },
            {
                id: 6,
                fullName: "Jerry",
                checkedIn: true
            }

        ]
        this.name = "Todd";
    }

    handleBlur($event:any) {
        console.log($event);
        this.name = $event.target.value;
    }

    handleInput($event:any) {
        this.name = $event.target.value;
    }

}