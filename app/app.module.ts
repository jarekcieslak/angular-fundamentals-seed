import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common'
import {AppComponent} from './app.component'

import PassengerDashboardModule from "./passanger-dashboard/passenger.dashboard.module";
import {PassengerViewerComponent} from "./passanger-dashboard/containers/passenger-viewer/passenger-viewer.component";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        PassengerDashboardModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
