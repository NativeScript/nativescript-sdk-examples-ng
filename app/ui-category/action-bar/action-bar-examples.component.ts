import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./../../link";

var menuLinks = [
    new Link("Action items", "/action-bar/action-items"),
    new Link("Navigation button", "/action-bar/navigation-button"),
    new Link("Title", "/action-bar/title")
];

@Component({
    selector: 'action-bar-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ActionBarExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
