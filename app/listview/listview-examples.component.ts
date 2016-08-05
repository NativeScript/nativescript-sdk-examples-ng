import { Component, ChangeDetectionStrategy, Input }  from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import { COMMON_DIRECTIVES } from './../directives';
import { Link } from "./../link";

var menuLinks = [
    new Link("Creating ListView", "/creatingListViewExampleComponent"),
    new Link("Customizing ListView", "/customizingListViewExampleComponent"),
    new Link("Using Item Template", "/usingItemTemplateExampleComponent"),
    new Link("Using Async Pipe", "/usingAsyncPipeExampleComponent")
];
     
@Component({
    selector: 'listview-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'listview/listview-examples.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListViewExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}