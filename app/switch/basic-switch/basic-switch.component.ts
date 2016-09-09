// >> switch-event-handle-code
import { Component } from "@angular/core";

@Component({
    selector: 'basic-switch-component',
    templateUrl: 'switch/basic-switch/basic-switch.component.html',
    styleUrls: ["switch/switch.style.css"],
})

export class BasicSwitchComponent {
    public FirstSwitchValue = false;
    public SecondSwitchValue = true;

    public firstSwitchState = "off";
    public secondSwitchState = "on";

    public FirstCheckChange(result) {
        if (result) {
            this.firstSwitchState = "on";
        }
        else {
            this.firstSwitchState = "off";
        }
    }

    public SecondCheckChange(result) {
        if (result) {
            this.secondSwitchState = "on";
        }
        else {
            this.secondSwitchState = "off";
        }
    }
}
// << switch-event-handle-code
