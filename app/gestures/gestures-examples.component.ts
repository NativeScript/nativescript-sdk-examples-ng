import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

var menuLinks = [
    new Link("Tap", "/tapGestureExampleComponent"),
    new Link("Double tap", "/doubleTapGestureExampleComponent"),
    new Link("Long press", "/longPressGestureExampleComponent"),
    new Link("Swipe", "/swipeGestureExampleComponent"),
    new Link("Pan", "/panGestureExampleComponent"),
    new Link("Pinch", "/pinchGestureExampleComponent"),
    new Link("Rotation", "/rotationGestureExampleComponent"),
    new Link("Touch", "/touchGestureExampleComponent"),
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
