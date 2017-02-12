"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PassengerDashboardComponent = (function () {
    function PassengerDashboardComponent(passangerService) {
        this.passangerService = passangerService;
    }
    PassengerDashboardComponent.prototype.ngOnInit = function () {
        this.passengers = this.passangerService.getPassangers();
    };
    PassengerDashboardComponent.prototype.handleRemove = function (event) {
        this.passengers = this.passengers.filter(function (passenger) {
            return passenger.id !== event.id;
        });
    };
    PassengerDashboardComponent.prototype.handleEdit = function (event) {
        this.passengers = this.passengers.map(function (passenger) {
            if (passenger.id === event.id) {
                return Object.assign({}, passenger, event);
            }
            else {
                return passenger;
            }
        });
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
