// >> switch-event-handle-code
import { Component } from "@angular/core";
import { Switch } from "ui/switch";

@Component({
    moduleId: module.id,
    templateUrl: "./basic-switch.component.html",
    styleUrls: ["./../switch.style.css"],
})
export class BasicSwitchComponent {
    public firstSwitchState = "OFF";
    public secondSwitchState = "ON";

    public onFirstChecked(args) {
        let firstSwitch = <Switch>args.object;
        if (firstSwitch.checked) {
            this.firstSwitchState = "ON";
        } else {
            this.firstSwitchState = "OFF";
        }
    }

    public onSecondChecked(args) {
        let secondSwitch = <Switch>args.object;
        if (secondSwitch.checked) {
            this.secondSwitchState = "ON";
        } else {
            this.secondSwitchState = "OFF";
        }
    }
}
// << switch-event-handle-code
