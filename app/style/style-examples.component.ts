import { Component, ChangeDetectionStrategy, Input }  from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import { COMMON_DIRECTIVES } from './../directives';
import { Link } from "./../link";

var menuLinks = [
    new Link("Add Style via CSS File", "/styleCSSFileComponent"),
    new Link("Apply Style using Code", "/applyStyleViaCodeComponent")
];
     
@Component({
    selector: 'style-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'style/style-examples.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class StyleExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}