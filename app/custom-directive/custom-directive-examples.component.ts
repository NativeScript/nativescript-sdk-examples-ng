import { Component, ChangeDetectionStrategy, Input }  from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import { COMMON_DIRECTIVES } from './../directives';
import { Link } from "./../link";

var menuLinks = [
    new Link("Creating Custom *ng Directive", "/createCustomDirectiveExampleComponent"),
    new Link("Unless Directive Example", "/unlessDirectiveExampleComponent"),
];
     
@Component({
    selector: 'custom-directive-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'custom-directive/custom-directive-examples.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomDirectiveExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}