import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../../link";

var menuLinks = [
    new Link("Single line items", "/singleLineListViewExampleComponent"),
    new Link("Grouped single line items", "/groupedSingleLineListViewExampleComponent"),
    new Link("Two line items", "/twoLineListViewExampleComponent"),
    new Link("Multi line items", "/multiLineListViewExampleComponent"),
    new Link("Grouped multi line items", "/multiLineGroupedListViewExampleComponent"),
    new Link("Multi line items - bigger thumbs", "/multiLineBigListViewExampleComponent"),
    new Link("Grouped two lines items", "/groupedTwoLinesListViewExampleComponent"),
    new Link("Cards", "/cardsListViewExampleComponent"),
    new Link("Horizontal scrolling", "/horizontalScrollingExampleComponent"),
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