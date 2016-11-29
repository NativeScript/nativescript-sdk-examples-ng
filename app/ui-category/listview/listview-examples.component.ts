import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./../../link";

let menuLinks = [
    new Link("Create ListView", "/list-view/creating-list-view"),
    new Link("Customize ListView", "/list-view/customizing-list-view"),
    new Link("Use item template", "/list-view/using-item-template"),
    new Link("Use async pipe", "/list-view/using-async-pipe")
];

@Component({
    templateUrl: "examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListViewExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
