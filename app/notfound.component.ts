import {Component} from "@angular/core";

@Component({
    selector: 'not-found',
    template: `
        Page not found. Go <a routerLink="/">home</a> ?
    `
})
export class NotFoundComponent {

}