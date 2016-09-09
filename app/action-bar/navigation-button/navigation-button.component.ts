import { Component } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'navigation-button-component',
    templateUrl: 'action-bar/navigation-button/navigation-button.component.html'
})

export class NavigationButtonComponent {
    // >> navigation-button-back-code
    constructor(private routerExtensions: RouterExtensions) {               
    }

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }
    // << navigation-button-back-code
}
