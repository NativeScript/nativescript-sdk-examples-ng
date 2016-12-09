import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";

@Component({
    moduleId: module.id,
    templateUrl: "./navigation-button.component.html"
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
