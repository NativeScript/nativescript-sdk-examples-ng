import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../../link";

var menuLinks = [
    new Link("Horizontal orientation", "/scroll-view/horizontal"),
    new Link("Vertical orientation", "/scroll-view/vertical"),
    new Link("Scroll event", "/scroll-view/scroll-event")
];
     
@Component({
    selector: 'scroll-view-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ScrollViewExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
