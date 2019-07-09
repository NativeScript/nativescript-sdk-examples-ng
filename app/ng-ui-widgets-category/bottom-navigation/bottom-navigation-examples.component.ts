import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "../../link";

let menuLinks = [
    new Link("Events", "/bottom-navigation/events"),
    new Link("Usage", "/bottom-navigation/usage"),
    new Link("Properties", "/bottom-navigation/properties"),
    new Link("Theming", "/bottom-navigation/theming")
];

@Component({
    moduleId: module.id,
    templateUrl: "./../../examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomNavigationExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
