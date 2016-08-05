import { Component, ChangeDetectionStrategy, Input }  from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import { COMMON_DIRECTIVES } from './../directives';
import { Link } from "./../link";

var menuLinks = [
    new Link("Animating Properties", "/animatingPropertiesComponent"),
    new Link("Chaining Animation", "/chainingAnimationsComponent"),
    new Link("Animating Multiple Views Simultaneously", "/multipleViewsComponent"),    
];
     
@Component({
    selector: 'animations-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'animations/animations-examples.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AnimationsExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}