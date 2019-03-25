// >> progress-setting-code
import { Component } from "@angular/core";
import { Progress } from "tns-core-modules/ui/progress";

@Component({
    moduleId: module.id,
    templateUrl: "./setting-progress.component.html",
})
export class SettingProgressComponent  {

    onProgressBarLoaded(args) {
        let myProgressBar = <Progress>args.object;

        myProgressBar.value = 10;
        myProgressBar.maxValue = 200;

        setInterval(function() {
            myProgressBar.value += 2;
        }, 300);
    }

    onValueChanged(args) {
        let myProgressBar = <Progress>args.object;

        console.log("Old Value: " + args.oldValue);
        console.log("New Value: " + args.value);
    }
}
// << progress-setting-code
