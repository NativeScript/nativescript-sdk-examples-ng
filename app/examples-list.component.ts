import { Component } from '@angular/core';
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import { COMMON_DIRECTIVES } from './directives';

@Component({
    selector: 'examples-lists.css',
    templateUrl: 'examples-list.component.html',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES]
})

export class ExamplesListComponent {
}