import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';

@Component({
    selector: 'action-bar-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'action-bar/action-items/action-items.component.html'
})

export class ActionItemsComponent {
}