// >> switch-event-handle-code
import { Component } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable";
import { Switch } from "tns-core-modules/ui/switch";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"
})
export class BasicSwitchComponent {

    onCheckedChange(args: EventData) {
        let sw = args.object as Switch;
        let isChecked = sw.checked; // boolean
    }
}
// << switch-event-handle-code
