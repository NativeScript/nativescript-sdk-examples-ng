import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'navigation-button-component',
    directives: [COMMON_DIRECTIVES],
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