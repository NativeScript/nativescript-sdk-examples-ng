import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../../link";

var menuLinks = [
    new Link("Create ListView", "/list-view/creating-list-view"),
    new Link("Customize ListView", "/list-view/customizing-list-view"),
    new Link("Use item template", "/list-view/using-item-template"),
    new Link("Use async pipe", "/list-view/using-async-pipe")
];

@Component({
    selector: 'listview-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListViewExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
