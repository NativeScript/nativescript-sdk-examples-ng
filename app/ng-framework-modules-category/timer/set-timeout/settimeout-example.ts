
import { Component } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable";
import { setTimeout } from "tns-core-modules/timer";
import { Color } from "tns-core-modules/color";
import { Button } from "tns-core-modules/ui/button";
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

        setTimeout(() => {
            this.counter++;
            button.backgroundColor = new Color("#30BCFF");
        }, 1000);
    }

    public decrease(args: EventData) {
        let button = <Button>args.object;
        button.backgroundColor = new Color("#3078FE");

        // >> settimeout-timer-code
        setTimeout(() => {
            this.counter--;
            button.backgroundColor = new Color("#30BCFF");
        }, 1000);
        // << settimeout-timer-code
    }
}

