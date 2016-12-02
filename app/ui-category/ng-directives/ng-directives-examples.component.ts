import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./../../link";

let menuLinks = [
    new Link("Create custom directive", "/angular-directives/create-custom-directive"),
    new Link("*ngFor repeater directive", "/angular-directives/ngfor-directive"),
    new Link("*ngSwitch structural directive", "/angular-directives/ngswitch-directive"),
    new Link("*sdkUnless custom directive", "/angular-directives/custom-unless-directive"),
    new Link("*ngIf directive - basic example", "/angular-directives/ngif-directive"),
    new Link("*ngIf directive - platform specific example", "/angular-directives/ngif-directive-advanced"),
];

@Component({
    moduleId: module.id,
    templateUrl: "./../../examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgDirectivesExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
