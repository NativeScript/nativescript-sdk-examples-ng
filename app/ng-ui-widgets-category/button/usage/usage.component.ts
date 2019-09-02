import { Component } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"
})
export class ButtonUsageComponent {
    public counter: number = 0;

    // >> button-tap-event-code
    onTap(args: EventData) {
        let button = args.object as Button;
        // execute your custom logic here...
        // >> (hide)
        this.counter++;
        alert("Tapped " + this.counter + " times!");
        // << (hide)
    }
    // << button-tap-event-code
}
