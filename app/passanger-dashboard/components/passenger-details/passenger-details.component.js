"use strict";
var core_1 = require("@angular/core");
var PassengerDetailsComponent = (function () {
    function PassengerDetailsComponent() {
        this.editing = false;
        this.remove = new core_1.EventEmitter();
        this.edit = new core_1.EventEmitter();
    }
    PassengerDetailsComponent.prototype.onNameChange = function (value) {
        console.log('Value:' + value);
        this.details.fullName = value;
    };
    PassengerDetailsComponent.prototype.removePassenger = function (passenger) {
        this.remove.emit(this.details);
    };
    PassengerDetailsComponent.prototype.toggleEdit = function () {
        if (this.editing) {
            this.edit.emit(this.details);
        }
        this.editing = !this.editing;
    };
    return PassengerDetailsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PassengerDetailsComponent.prototype, "details", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PassengerDetailsComponent.prototype, "remove", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PassengerDetailsComponent.prototype, "edit", void 0);
PassengerDetailsComponent = __decorate([
    core_1.Component({
        selector: 'passenger-details',
        templateUrl: './passenger-details.component.html',
        styleUrls: ['./passenger-details.component.scss']
    }),
    __metadata("design:paramtypes", [])
], PassengerDetailsComponent);
exports.PassengerDetailsComponent = PassengerDetailsComponent;
//# sourceMappingURL=passenger-details.component.js.map