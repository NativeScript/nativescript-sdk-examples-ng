import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'action-bar-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'action-bar/action-items/action-items.component.html'
})

export class ActionItemsComponent {
    constructor(private routerExtensions: RouterExtensions) {               
    }

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}