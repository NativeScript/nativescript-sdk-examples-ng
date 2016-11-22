import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../../link";

var menuLinks = [
    new Link("Single line items", "/extended-listview/single-line-listview"),
    new Link("Grouped single line items", "/extended-listview/grouped-single-line"),
    new Link("Two line items", "/extended-listview/two-line-listview"),
    new Link("Multi line items", "/extended-listview/multi-line"),
    new Link("Grouped multi line items", "/extended-listview/multi-line-grouped"),
    new Link("Multi line items - bigger thumbs", "/extended-listview/multi-line-big"),
    new Link("Grouped two lines items", "/extended-listview/grouped-two-lines"),
    new Link("Cards", "/extended-listview/cards-listview"),
    new Link("Horizontal scrolling", "/extended-listview/horizontal-scrolling"),
    new Link("Header with map", "/extended-listview/header-with-map"),
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