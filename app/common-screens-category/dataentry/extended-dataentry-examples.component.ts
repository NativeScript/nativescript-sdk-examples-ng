import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./../../link";

let menuLinks = [
    new Link("Welcome screen", "/dataentry/dataentry-welcome"),
    new Link("Social login", "/dataentry/dataentry-social-login"),
    new Link("Sign up", "/dataentry/dataentry-signup"),
];

@Component({
    moduleId: module.id,
    templateUrl: "examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtendedDataEntryExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
