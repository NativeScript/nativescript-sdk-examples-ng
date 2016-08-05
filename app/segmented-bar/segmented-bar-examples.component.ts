import { Component, ChangeDetectionStrategy, Input }  from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import { COMMON_DIRECTIVES } from './../directives';
import { Link } from "./../link";

var menuLinks = [
    new Link("Basic Segmented Bar", "/basicSegmentedBarComponent"),
    new Link("Segmented Bar View Change", "/segmentedBarViewsComponent")
];
     
@Component({
    selector: 'segmented-bar-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'segmented-bar/segmented-bar-examples.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SegmentedBarExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}