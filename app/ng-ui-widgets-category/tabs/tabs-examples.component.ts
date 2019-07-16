import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "../../link";

let menuLinks = [
    new Link("Events", "/tabs/events"),
    new Link("Usage", "/tabs/usage"),
    new Link("Properties", "/tabs/properties"),
    new Link("Theming", "/tabs/theming"),
    new Link("Tips & Tricks", "/tabs/tips-and-tricks")
];

@Component({
    moduleId: module.id,
    templateUrl: "./../../examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
