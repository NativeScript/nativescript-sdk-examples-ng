// >> switch-event-handle-code
import { Component } from "@angular/core";
// >> (hide)
import { COMMON_DIRECTIVES } from '../../directives';
// << (hide0)

@Component({
    selector: 'basic-switch-component',
    // >> (hide)
    directives: [COMMON_DIRECTIVES],
    // << (hide)
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