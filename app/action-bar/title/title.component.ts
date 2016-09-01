import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'action-bar-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'action-bar/title/title.component.html'
})

export class TitleComponent {
    constructor(private routerExtensions: RouterExtensions) {
    }

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}