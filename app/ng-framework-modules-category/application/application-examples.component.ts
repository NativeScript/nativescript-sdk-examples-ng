import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./../../link";

let menuLinks = [
    new Link("Checking Target Platform", "/ns-framework-modules-category/application/check-target"),
    new Link("Using Android Specifics", "/ns-framework-modules-category/application/using-android"),
    new Link("Using iOS Specifics", "/ns-framework-modules-category/application/using-ios"),
];

@Component({
    moduleId: module.id,
    templateUrl: "./../../examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
