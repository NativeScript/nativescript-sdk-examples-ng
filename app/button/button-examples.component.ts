import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import { COMMON_DIRECTIVES } from './../directives';
import { Link } from "./../link";

var menuLinks = [
    new Link("Tap event", "/buttonTapEventComponent"),
    new Link("Text", "/buttonTextComponent"),
    new Link("Binding text", "/buttonBindingTextComponent"),
];
     
@Component({
    selector: 'button-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'button/button-examples.component.html',
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