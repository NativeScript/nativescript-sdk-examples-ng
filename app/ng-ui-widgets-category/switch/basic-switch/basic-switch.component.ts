import { Component } from "@angular/core";
import { Switch } from "tns-core-modules/ui/switch";
import { EventData } from "tns-core-modules/data/observable";

@Component({
    moduleId: module.id,
    templateUrl: "./basic-switch.component.html",
    styleUrls: ["./../switch.style.css"],
})
export class BasicSwitchComponent {
    firstSwitchState = "OFF";
    secondSwitchState = "ON";

    onFirstChecked(args) {
        let firstSwitch = args.object as Switch;
        if (firstSwitch.checked) {
            this.firstSwitchState = "ON";
        } else {
            this.firstSwitchState = "OFF";
        }
    }

    // >> switch-event-handle-code
    // import { Switch } from "tns-core-modules/ui/switch";
    // import { EventData } from "tns-core-modules/data/observable";

    onCheckedChange(args: EventData) {
        let mySwitch = args.object as Switch;
        let isChecked = mySwitch.checked; // boolean
        // >> (hide)
        if (isChecked) {
            this.secondSwitchState = "ON";
        } else {
            this.secondSwitchState = "OFF";
        }
        // << (hide)
    }
    // << switch-event-handle-code
}

