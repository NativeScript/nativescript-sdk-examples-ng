import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

var menuLinks = [
    new Link("Checking Target Platform", "/application/check-target"),
    new Link("Using Android Specifics", "/application/using-android"),
    new Link("Using iOS Specifics", "/application/using-ios"),
];

@Component({
    selector: 'application-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ApplicationExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
