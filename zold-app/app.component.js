"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        var test = null;
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
        ];
        this.name = "Todd";
    }
    AppComponent.prototype.handleBlur = function ($event) {
        console.log($event);
        this.name = $event.target.value;
    };
    AppComponent.prototype.handleInput = function ($event) {
        this.name = $event.target.value;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "app-root",
        templateUrl: "./app.component.html",
        styleUrls: ["./app.component.scss"]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map