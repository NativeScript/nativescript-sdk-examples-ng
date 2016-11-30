// >> switch-event-handle-code
import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: "ui-category/switch/basic-switch/basic-switch.component.html",
    styleUrls: ["ui-category/switch/switch.style.css"],
})
export class BasicSwitchComponent {
    public fSwitchValue = false;
    public sSwitchValue = true;

    public firstSwitchState = "off";
    public secondSwitchState = "on";

    public FirstCheckChange(result) {
        if (result) {
            this.firstSwitchState = "on";
        } else {
            this.firstSwitchState = "off";
        }
    }

    public SecondCheckChange(result) {
        if (result) {
            this.secondSwitchState = "on";
        } else {
            this.secondSwitchState = "off";
        }
    }
}
// << switch-event-handle-code
