import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

var menuLinks = [
    new Link("Tap event", "/buttonTapEventComponent"),
    new Link("Text", "/buttonTextComponent"),
    new Link("Binding text", "/buttonBindingTextComponent"),
];

@Component({
    selector: 'button-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ButtonExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}
