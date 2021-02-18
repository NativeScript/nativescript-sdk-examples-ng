// >> time-picker-configure-code
import { Component } from "@angular/core";
import { TimePicker } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"
})
export class UsageComponent {
    todayObj: Date = new Date();

    onTimeChanged(args) {
        const tp = args.object as TimePicker;

        const time = args.value;
        console.log(`Chosen time: ${time}`);
    }
}
// << time-picker-configure-code
