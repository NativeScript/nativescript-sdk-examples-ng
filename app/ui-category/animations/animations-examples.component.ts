import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../../link";

var menuLinks = [
    new Link("Animate properties", "/animations/animating-properties"),
    new Link("Chaining animation", "/animations/chaining-animations"),
    new Link("Animate multiple views", "/animations/multiple-views"),
];

@Component({
    selector: 'animations-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AnimationsExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
