import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";

@Component({
    moduleId: module.id,
    templateUrl: "./action-items.component.html"
})
export class ActionItemsComponent {
    constructor(private routerExtensions: RouterExtensions) {
    }

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}
