import { Component } from "@angular/core";
import { Button, Color, EventData, Utils } from "@nativescript/core";
@Component({
    moduleId: module.id,
    styleUrls: ["./settimeout-example.css"],
    templateUrl: "./settimeout-example.html"
})
export class SetTimeoutComponent {
    public counter = 0;

    public increase(args: EventData) {
        let button = <Button>args.object;
        button.backgroundColor = new Color("#3078FE");

        Utils.setTimeout(() => {
            this.counter++;
            button.backgroundColor = new Color("#30BCFF");
        }, 1000);
    }

    public decrease(args: EventData) {
        let button = <Button>args.object;
        button.backgroundColor = new Color("#3078FE");

        // >> settimeout-timer-code
        Utils.setTimeout(() => {
            this.counter--;
            button.backgroundColor = new Color("#30BCFF");
        }, 1000);
        // << settimeout-timer-code
    }
}

