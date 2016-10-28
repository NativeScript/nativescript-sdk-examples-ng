import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../../link";

var menuLinks = [
    new Link("Content page", "/contentPageExampleComponent"),
    // new Link("Content page (auto hide image)", "/contentScrollablePageExampleComponent"),
    // new Link("Coverpage", "/coverpagePageExampleComponent"),
];

@Component({
    selector: 'content-screens-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContentScreensExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}