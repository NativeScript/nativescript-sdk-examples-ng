import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";

@Component({
    moduleId: module.id,
    templateUrl: "./title.component.html"
})
export class TitleComponent {
    constructor(private routerExtensions: RouterExtensions) {
    }

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}
