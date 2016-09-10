import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

var menuLinks = [
    new Link("Basic SegmentedBar", "/basicSegmentedBarComponent"),
    new Link("SegmentedBar view change", "/segmentedBarViewsComponent")
];

@Component({
    selector: 'segmented-bar-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SegmentedBarExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
