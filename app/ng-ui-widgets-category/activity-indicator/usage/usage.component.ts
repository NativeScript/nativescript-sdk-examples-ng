// >> activity-indicator-setting-busy-tsc
import { Component } from "@angular/core";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import { EventData } from "tns-core-modules/data/observable";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"
})
export class ActivityIndicatorUsageComponent {
    isBusy: boolean = true;

    onBusyChanged(args: EventData) {
        let indicator: ActivityIndicator = <ActivityIndicator>args.object;
        console.log("indicator.busy changed to: " + indicator.busy);
    }
}
// << activity-indicator-setting-busy-tsc
