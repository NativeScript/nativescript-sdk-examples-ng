import { Component, ChangeDetectionStrategy, Input }  from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import { COMMON_DIRECTIVES } from './../directives';
import { Link } from "./../link";

var menuLinks = [
    new Link("Horizontal Orientation", "/scrollViewHorizontalExampleComponent"),
    new Link("Vertical Orientation", "/scrollViewVertivalExampleComponent"),
    new Link("Scroll Event", "/scrollEventExampleComponent")
];
     
@Component({
    selector: 'scroll-view-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'scroll-view/scroll-view-examples.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ScrollViewExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}