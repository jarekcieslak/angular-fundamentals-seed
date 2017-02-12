"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PassengerDashboardComponent = (function () {
    function PassengerDashboardComponent() {
    }
    PassengerDashboardComponent.prototype.ngOnInit = function () {
        this.passengers = [{
                id: 1,
                fullName: 'Hodornowa',
                checkedIn: true,
                checkInDate: 1486117624520,
                children: [{ name: 'Johnny', age: 12 }]
            },
            {
                id: 2,
                fullName: 'Melanie Brooks',
                checkedIn: true,
                checkInDate: 1486117624525,
                children: [{ name: 'Johnny', age: 12 }]
            },
            {
                id: 3,
                fullName: 'Jonny Cage',
                checkedIn: false,
                checkInDate: null,
                children: [{ name: 'Johnny', age: 12 }, { name: 'Johnny', age: 12 }, { name: 'Johnny', age: 12 }]
            },
            {
                id: 4,
                fullName: 'Liu Kang',
                checkedIn: true,
                checkInDate: 1486117624525,
                children: [{ name: 'Johnny', age: 12 }]
            }
        ];
        console.log(this.passengers.length);
    };
    PassengerDashboardComponent.prototype.handleRemove = function (event) {
        this.passengers = this.passengers.filter(function (passenger) {
            return passenger.id !== event.id;
        });
    };
    PassengerDashboardComponent.prototype.handleEdit = function (event) {
        this.passengers.map(function (passenger) {
            if (passenger.id === event.id) {
                return Object.assign({}, passenger, event);
            }
        });
        console.log(this.passengers);
    };
    return PassengerDashboardComponent;
}());
PassengerDashboardComponent = __decorate([
    core_1.Component({
        selector: 'passanger-dashboard',
        templateUrl: './passanger-dashboard.component.html',
        styleUrls: ['./passanger-dashboard.component.scss']
    })
], PassengerDashboardComponent);
exports.PassengerDashboardComponent = PassengerDashboardComponent;
