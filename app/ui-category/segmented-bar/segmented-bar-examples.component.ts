import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./../../link";

let menuLinks = [
    new Link("Basic SegmentedBar", "/segmented-bar/basic"),
    new Link("SegmentedBar view change", "/segmented-bar/views")
];

@Component({
    moduleId: module.id,
    templateUrl: "./../../examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SegmentedBarExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
