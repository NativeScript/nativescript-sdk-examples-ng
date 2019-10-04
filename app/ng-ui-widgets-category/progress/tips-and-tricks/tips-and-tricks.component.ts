// >> progress-setting-code
import { Component } from "@angular/core";
import { Progress } from "tns-core-modules/ui/progress";

@Component({
    moduleId: module.id,
    templateUrl: "./tips-and-tricks.component.html",
})
export class TipsAndTricksComponent  {
    onProgressBarLoaded(args) {
        let myProgressBar = args.object as Progress;

        myProgressBar.value = 10; // Initial value
        myProgressBar.maxValue = 100; // Maximum value

        // Forcing progress value change (for demonstration)
        setInterval(() => {
            myProgressBar.value += 2;
        }, 1000);
    }

    onValueChanged(args) {
        let myProgressBar = args.object as Progress;

        // TIP: args (for valueChange of Progress) is extending EventData with oldValue & value parameters
        console.log("Old Value: " + args.oldValue);
        console.log("New Value: " + args.value);
    }
}
// << progress-setting-code
