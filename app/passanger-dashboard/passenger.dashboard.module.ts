import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HttpModule} from "@angular/http";

import {PassengerCountComponent} from './components/passenger-count/passenger-count.component'
import {PassengerDetailsComponent} from './components/passenger-details/passenger-details.component'
import {PassengerDashboardService} from "./passenger-dashboard.service";
import {PassengerViewerComponent} from "./containers/passenger-viewer/passenger-viewer.component";
import {PassengerDashboardComponent} from "./containers/passenger-dashboard/passenger-dashboard.component";
import {PassengerFormComponent} from "./components/passenger-form/passenger-form.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailsComponent,
        PassengerViewerComponent,
        PassengerFormComponent],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule],
    exports: [
        PassengerViewerComponent,
        PassengerDashboardComponent
    ],
    providers: [PassengerDashboardService]
})
export default class PassengerDashboardModule {

}
