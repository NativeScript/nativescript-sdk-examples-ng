import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../../link";

var menuLinks = [
    new Link("ListView: Single Line Items", "/singleLineListViewExampleComponent"),
    new Link("ListView: Grouped Single Line Items", "/groupedSingleLineListViewExampleComponent"),
    new Link("ListView: Two Line Items", "/twoLineListViewExampleComponent")
];

@Component({
    selector: 'extended-listview-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ExtendedListViewExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}