import { Component, ChangeDetectionStrategy, Input }  from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import { COMMON_DIRECTIVES } from './../directives';
import { Link } from "./../link";

var menuLinks = [
    new Link("Basic Slider", "/basicSliderComponent"),
    new Link("Segmented Bar View Change", "/accessSliderValueComponent")
];
     
@Component({
    selector: 'slider-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'slider/slider-examples.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SliderExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}