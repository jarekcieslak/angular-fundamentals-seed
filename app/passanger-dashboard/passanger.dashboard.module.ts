import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {PassengerDashboardComponent} from './containers/passanger-dashboard/passanger-dashboard.component'
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component'
import {PassengerDetailsComponent} from './components/passenger-details/passenger-details.component'
import {PassangerDashboardService} from "./passanger-dashboard.service";

@NgModule({
    declarations: [PassengerDashboardComponent, PassengerCountComponent, PassengerDetailsComponent],
    imports: [CommonModule],
    exports: [PassengerDashboardComponent],
    providers: [PassangerDashboardService]
})
export default class PassangerDashboardModule {

}
