import { Component } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'action-bar-component',
    templateUrl: 'action-bar/action-items/action-items.component.html'
})

export class ActionItemsComponent {
    constructor(private routerExtensions: RouterExtensions) {               
    }

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}
