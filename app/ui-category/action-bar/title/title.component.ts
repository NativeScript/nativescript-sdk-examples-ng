import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    templateUrl: "ui-category/action-bar/title/title.component.html"
})
export class TitleComponent {
    constructor(private routerExtensions: RouterExtensions) {
    }

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}
