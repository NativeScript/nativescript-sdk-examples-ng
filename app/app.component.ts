import { Component } from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';

@Component({
    selector: "my-app",
    directives: [NS_ROUTER_DIRECTIVES],    
    template: "<page-router-outlet></page-router-outlet>",
})

export class AppComponent {
}
