import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./../../link";

let menuLinks = [
    new Link("Action dialog", "/dialogs/action"),
    new Link("Alert dialog", "/dialogs/alert"),
    new Link("Confirm dialog", "/dialogs/confirm"),
    new Link("Login dialog", "/dialogs/login"),
    new Link("Prompt dialog", "/dialogs/prompt")
];

@Component({
    moduleId: module.id,
    templateUrl: "./../../examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogsExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
