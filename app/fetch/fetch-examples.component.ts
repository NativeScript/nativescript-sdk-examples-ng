import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

var menuLinks = [
    new Link("Fetch Get", "/fetchGetExampleComponent"),
    new Link("Fetch Post", "/fetchPostExampleComponent")
];

@Component({
    selector: 'connectivity-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class FetchExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
