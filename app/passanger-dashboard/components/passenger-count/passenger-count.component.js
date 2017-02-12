"use strict";
var core_1 = require("@angular/core");
var PassengerCountComponent = (function () {
    function PassengerCountComponent() {
    }
    PassengerCountComponent.prototype.checkedInCount = function () {
        if (!this.items) {
            return 0;
        }
        return this.items.filter(function (passanger) { return passanger.checkedIn; }).length;
    };
    return PassengerCountComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PassengerCountComponent.prototype, "items", void 0);
PassengerCountComponent = __decorate([
    core_1.Component({
        selector: 'passenger-count',
        template: "<h3>Airline passengers!</h3>\n    Total checked in: {{checkedInCount()}} / {{items.length}}"
    }),
    __metadata("design:paramtypes", [])
], PassengerCountComponent);
exports.PassengerCountComponent = PassengerCountComponent;
//# sourceMappingURL=passenger-count.component.js.map