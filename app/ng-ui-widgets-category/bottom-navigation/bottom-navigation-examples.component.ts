import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "../../link";

let menuLinks = [
    new Link("Usage", "/bottom-navigation/usage"),
    new Link("Styling", "/bottom-navigation/styling"),
    // new Link("Tips & Tricks", "/bottom-navigation/tips-and-tricks")
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
