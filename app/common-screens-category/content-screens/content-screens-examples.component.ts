import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../../link";

let menuLinks = [
    new Link("Content page (auto hide/show image)", "/content-screens/content-scrollable"),
];

@Component({
    selector: "content-screens",
    templateUrl: "examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContentScreensExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
