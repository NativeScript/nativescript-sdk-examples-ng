import { Component, ChangeDetectionStrategy, Input }  from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import { COMMON_DIRECTIVES } from './../directives';
import { Link } from "./../link";

var menuLinks = [
    new Link("Creating Progress", "/creatingProgressExampleComponent"),
    new Link("Setting up Progress", "/settingProgressExampleComponent")    
];
     
@Component({
    selector: 'progress-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'progress/progress-examples.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProgressExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}