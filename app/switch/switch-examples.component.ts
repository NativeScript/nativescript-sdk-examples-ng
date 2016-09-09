import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

var menuLinks = [
    new Link("Basic Switch", "/basicSwitchComponent"),
    new Link("Disable Switch", "/diableSwitchComponent"),
    new Link("Styling Switch", "/stylingSwitchComponent")
];

@Component({
    selector: 'switch-component',
    templateUrl: 'examples-list.component.html',
    styleUrls: ["switch/switch.style.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SwitchExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
