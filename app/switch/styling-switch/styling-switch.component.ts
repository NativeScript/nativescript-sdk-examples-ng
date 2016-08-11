import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';

@Component({
    selector: 'styling-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'switch/styling-switch/styling-switch.component.html',
    styleUrls:["switch/styling-switch/style.css"]
})

export class StylingSwitchComponent {
}