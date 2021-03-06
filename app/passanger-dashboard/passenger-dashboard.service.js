"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PassangerDashboardService = (function () {
    function PassangerDashboardService() {
    }
    PassangerDashboardService.prototype.getPassangers = function () {
        return [
            {
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
    };
    return PassangerDashboardService;
}());
PassangerDashboardService = __decorate([
    core_1.Injectable()
], PassangerDashboardService);
exports.PassangerDashboardService = PassangerDashboardService;
