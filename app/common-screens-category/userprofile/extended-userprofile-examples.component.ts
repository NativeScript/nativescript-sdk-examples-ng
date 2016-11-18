import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../../link";

var menuLinks = [
    new Link("User feed with images", "/userprofile/user-feed-images"),
    new Link("User settings menu", "/userprofile/user-settings-menu"),
    new Link("User feed", "/userprofile/user-feed")
];

@Component({
    selector: 'extended-userprofile-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ExtendedUserProfileExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}