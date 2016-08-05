import { Component, ChangeDetectionStrategy, Input }  from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import { COMMON_DIRECTIVES } from './../directives';
import { Link } from "./../link";

var menuLinks = [
    new Link("Creating ListPicker", "/creatingListPickerExampleComponent"),
    new Link("Using Selected Index", "/usingSelectedIndexExampleComponent")
];
     
@Component({
    selector: 'listpicker-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'listpicker/listpicker-examples.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListPickerExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}