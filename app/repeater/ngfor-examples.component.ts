import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../directives';
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';

@Component({
    selector: 'repeater-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'repeater/ngfor-examples.component.html'
})

export class NgForExamplesComponent {
}