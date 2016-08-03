import { Component, ChangeDetectionStrategy } from "@angular/core";
import { EventData } from "data/observable";
import { COMMON_DIRECTIVES } from '../../directives';
import { SegmentedBarItem } from "ui/segmented-bar";

@Component({
    selector: 'styling-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'switch/styling-switch/styling-switch.component.html',
    styleUrls:["switch/styling-switch/style.css"]
})

export class StylingSwitchComponent {

}