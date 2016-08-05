import { Component, ChangeDetectionStrategy, Input }  from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import { COMMON_DIRECTIVES } from './../directives';
import { Link } from "./../link";

var menuLinks = [
    new Link("Absolute Layout", "/absoluteLayoutComponent"),
    new Link("Dock Layout", "/dockLayoutComponent"),
    new Link("Grid Layout", "/gridLayoutComponent"),
    new Link("Stack Layout", "/stackLayoutComponent"),
    new Link("Wrap Layout", "/wrapLayoutComponent") 
];
     
@Component({
    selector: 'layouts-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'layouts/layouts-examples.component.html',
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