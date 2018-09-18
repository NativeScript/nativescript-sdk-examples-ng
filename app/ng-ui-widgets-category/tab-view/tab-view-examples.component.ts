import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./../../link";

let menuLinks = [
    new Link("Basics", "/tab-view/basic"),
    new Link("Styling Tab View", "/tab-view/styling"),
    new Link("Navigation", "/tab-view/navigation"),
    new Link("Using icon font in TabView", "/tab-view/icon-fonts"),
    new Link("Tabs limit(Android)", "/tab-view/tabs-limit"),
    new Link("Tabs position(Android)", "/tab-view/tabs-position"),
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
