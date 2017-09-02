import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common'
import {AppComponent} from './app.component'

import PassengerDashboardModule from "./passanger-dashboard/passenger.dashboard.module";
import {PassengerViewerComponent} from "./passanger-dashboard/containers/passenger-viewer/passenger-viewer.component";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./notfound.component";

const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: '**', component: NotFoundComponent, pathMatch: 'full'}
]

@NgModule({
    declarations: [AppComponent, HomeComponent, NotFoundComponent],
    imports: [
        RouterModule.forRoot(routes, {useHash: true}),
        BrowserModule,
        CommonModule,
        PassengerDashboardModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
