import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

var menuLinks = [
    new Link("Horizontal orientation", "/scrollViewHorizontalExampleComponent"),
    new Link("Vertical orientation", "/scrollViewVertivalExampleComponent"),
    new Link("Scroll event", "/scrollEventExampleComponent")
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
