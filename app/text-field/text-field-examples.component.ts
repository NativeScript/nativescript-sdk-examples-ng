import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import { COMMON_DIRECTIVES } from './../directives';
import { Link } from "./../link";

var menuLinks = [
    new Link("Basic TextField", "/basicTextFieldComponent"),
    new Link("TextField binding", "/textFieldBindingComponent")
];
     
@Component({
    selector: 'text-field-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'text-field/text-field-examples.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TextFieldExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}