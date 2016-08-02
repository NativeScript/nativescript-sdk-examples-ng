import { Component, ChangeDetectionStrategy } from "@angular/core";
import { EventData } from "data/observable";
import { COMMON_DIRECTIVES } from '../../directives';
import { SegmentedBarItem } from "ui/segmented-bar";
// >> switch-event-handle-code
@Component({
    selector: 'basic-switch-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'switch/basic-switch/basic-switch.component.html'
})

export class BasicSwitchComponent {
    public FirstSwitchValue = false;
    public SecondSwitchValue =true;

    public firstSwitchState = "off";
    public secondSwitchState = "on";

    public FirstCheckChange(result){
        if(result){
            this.firstSwitchState = "on";
        }
        else{
            this.firstSwitchState = "off";
        }
    }

    public SecondCheckChange(result){
        if(result){
            this.secondSwitchState = "on";
        }
        else{
            this.secondSwitchState = "off";
        }
    }
}
// << switch-event-handle-code