import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../../link";

var menuLinks = [
    new Link("Basic SearchBar", "/search-bar/basic"),
    new Link("Clear SearchBar", "/search-bar/clear"),
    new Link("SearchBar binding", "/search-bar/binding")
];

@Component({
    selector: 'search-bar-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchBarExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
