import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../directives';
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';

@Component({
    selector: 'time-picker-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'time-picker/time-picker-examples.component.html'
})

export class TimePickerExamplesComponent {
}