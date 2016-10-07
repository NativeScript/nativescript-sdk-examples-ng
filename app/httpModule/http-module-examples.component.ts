import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

var menuLinks = [
    new Link("HTTP POST JSON example", "/httpModulePostExampleComponent"),
    new Link("HTTP GET example", "/httpModuleGetExampleComponent")
];

@Component({
    selector: 'http-module-examples-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class HTTPModuleComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
