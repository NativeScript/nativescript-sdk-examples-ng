import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./../../link";

let menuLinks = [
    new Link("Basic Switch", "/switch/basic"),
    new Link("Disable Switch", "/switch/disable"),
    new Link("Styling Switch", "/switch/styling")
];

@Component({
    moduleId: module.id,
    templateUrl: "examples-list.component.html",
    styleUrls: ["ui-category/switch/switch.style.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
