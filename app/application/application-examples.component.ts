import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

var menuLinks = [
    new Link("Checking Target Platform", "/checkTargetExampleComponent"),
    new Link("Using Android Specifics", "/usingAndroidSpecificsExampleComponent"),
    new Link("Using iOS Specifics", "/usingIosSpecificsExampleComponent"),
];

@Component({
    selector: 'application-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ApplicationExamplesComponent {
    public links: Array<
        Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
