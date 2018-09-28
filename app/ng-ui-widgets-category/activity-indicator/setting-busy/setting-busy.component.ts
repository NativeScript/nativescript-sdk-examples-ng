import { Component } from "@angular/core";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";

@Component({
    moduleId: module.id,
    templateUrl: "./setting-busy.component.html"
})
export class SettingBusyComponent {

    onBusyChanged(args) {
        let indicator = <ActivityIndicator>args.object;
        console.log("indicator.busy changed to: " + indicator.busy);
    }
}
