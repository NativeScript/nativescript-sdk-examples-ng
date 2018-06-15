import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./../../link";

let menuLinks = [
    new Link("Nested routers", "/routing/nested-routers"),
];

@Component({
    moduleId: module.id,
    templateUrl: "./../../examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoutingExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
