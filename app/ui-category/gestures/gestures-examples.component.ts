import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../../link";

var menuLinks = [
    new Link("Tap", "/gestures/tap"),
    new Link("Double tap", "/gestures/double-tap"),
    new Link("Long press", "/gestures/long-press"),
    new Link("Swipe", "/gestures/swipe"),
    new Link("Pan", "/gestures/pan"),
    new Link("Pinch", "/gestures/pinch"),
    new Link("Rotation", "/gestures/rotation"),
    new Link("Touch", "/gestures/touch"),
];

@Component({
    selector: 'gestures-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class GesturesExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
