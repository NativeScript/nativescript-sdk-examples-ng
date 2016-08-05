import { Component, ChangeDetectionStrategy, Input }  from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import { COMMON_DIRECTIVES } from './../directives';
import { Link } from "./../link";

var menuLinks = [
    new Link("Basic Switch", "/basicSwitchComponent"),
    new Link("Disable Switch", "/diableSwitchComponent"),
    new Link("Styling Switch", "/stylingSwitchComponent")
];
     
@Component({
    selector: 'switch-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'switch/switch-examples.component.html',
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