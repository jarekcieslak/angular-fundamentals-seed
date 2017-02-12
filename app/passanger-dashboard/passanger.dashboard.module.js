"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var passanger_dashboard_component_1 = require("./containers/passanger-dashboard/passanger-dashboard.component");
var passenger_count_component_1 = require("./components/passenger-count/passenger-count.component");
var passenger_details_component_1 = require("./components/passenger-details/passenger-details.component");
var PassangerDashboardModule = (function () {
    function PassangerDashboardModule() {
    }
    return PassangerDashboardModule;
}());
PassangerDashboardModule = __decorate([
    core_1.NgModule({
        declarations: [passanger_dashboard_component_1.PassengerDashboardComponent, passenger_count_component_1.PassengerCountComponent, passenger_details_component_1.PassengerDetailsComponent],
        imports: [common_1.CommonModule],
        exports: [passanger_dashboard_component_1.PassengerDashboardComponent]
    }),
    __metadata("design:paramtypes", [])
], PassangerDashboardModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PassangerDashboardModule;
//# sourceMappingURL=passanger.dashboard.module.js.map