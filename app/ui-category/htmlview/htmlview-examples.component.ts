import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../../link";

let menuLinks = [
    new Link("Create HtmlView", "/html-view/creating-html-view")
];

@Component({
    selector: "htmlview-component",
    templateUrl: "examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class HtmlViewExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
