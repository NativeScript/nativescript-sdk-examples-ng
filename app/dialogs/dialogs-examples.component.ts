import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

var menuLinks = [
    new Link("Action dialog", "/actionDialogComponent"),
    new Link("Alert dialog", "/alertDialogComponent"),
    new Link("Confirm dialog", "/confirmDialogComponent"),
    new Link("Login dialog", "/loginDialogComponent"),
    new Link("Prompt dialog", "/promptDialogComponent")
];

@Component({
    selector: 'dialog-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class DialogsExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
