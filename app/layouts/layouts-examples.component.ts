import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import { COMMON_DIRECTIVES } from './../directives';
import { Link } from "./../link";

var menuLinks = [
    new Link("AbsoluteLayout", "/absoluteLayoutComponent"),
    new Link("DockLayout", "/dockLayoutComponent"),
    new Link("GridLayout", "/gridLayoutComponent"),
    new Link("StackLayout", "/stackLayoutComponent"),
    new Link("WrapLayout", "/wrapLayoutComponent")
];

@Component({
    selector: 'layouts-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LayoutsExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}