import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Link } from "./../link";

let menuLinks = [
    new Link("Fetch Get", "/fetch/fetch-get"),
    new Link("Fetch Post", "/fetch/fetch-post")
];

@Component({
    moduleId: module.id,
    templateUrl: "./../examples-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FetchExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (let i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
