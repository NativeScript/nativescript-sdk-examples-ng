// >> progress-create-code
import { Component } from "@angular/core";
import { EventData, Progress } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html",
})
export class UsageComponent {

    onValueChanged(args: EventData) {
        let progressBar = args.object as Progress;
        console.log("New value: " + progressBar.value);
    }
}
// << progress-create-code
