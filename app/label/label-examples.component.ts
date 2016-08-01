import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../directives';
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';

@Component({
    selector: 'label-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'label/label-examples.component.html'
})

export class LabelExamplesComponent {
}