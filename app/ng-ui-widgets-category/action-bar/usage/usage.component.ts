// >> action-bar-basic-usage-ts
import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"

})
export class ActionBarUsageComponent {

    constructor(private routerExtensions: RouterExtensions) { }

    goBack() {
        this.routerExtensions.backToPreviousPage();
    }

    openSettings() {
        // implement the cusotm logic
    }
}
// << action-bar-basic-usage-ts
