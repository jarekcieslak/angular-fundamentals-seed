import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {PassengerDashboardComponent} from './containers/passanger-dashboard/passanger-dashboard.component'
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component'
import {PassengerDetailsComponent} from './components/passenger-details/passenger-details.component'
import {PassengerDashboardService} from "./passanger-dashboard.service";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [PassengerDashboardComponent, PassengerCountComponent, PassengerDetailsComponent],
    imports: [CommonModule, HttpModule],
    exports: [PassengerDashboardComponent],
    providers: [PassengerDashboardService]
})
export default class PassangerDashboardModule {

}
