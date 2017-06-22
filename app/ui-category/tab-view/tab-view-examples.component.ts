import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./../../link";

let menuLinks = [
    new Link("Basic TabView", "/tab-view/basic"),
    new Link("TabView items", "/tab-view/items"),
    new Link("Customizing Tab View", "/tab-view/customizing"),
    new Link("Binding (Two-way) TabView selectedIndex", "/tab-view/binding"),
];

@Component({
    moduleId: module.id,
    templateUrl: "./../../examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabViewExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
