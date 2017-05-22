// >> settimeout-time-picker-configure-code
import { Component } from "@angular/core";
import { EventData } from "data/observable";
import { setInterval, setTimeout, clearInterval } from "timer";
import { Color } from "color";
import { Button } from "ui/button"
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
 
        setTimeout(() => {
            this.counter--;
            button.backgroundColor = new Color("#30BCFF");
        }, 1000);
    }
}
// << settimeout-time-picker-configure-code
