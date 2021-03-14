import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";

@Component({
    moduleId: module.id,
    templateUrl: "./styling.component.html"
})
export class ActionBarStylingComponent {

    constructor(private routerExtensions: RouterExtensions) { }

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}
