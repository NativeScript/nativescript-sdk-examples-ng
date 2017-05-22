import { Component } from "@angular/core";
import { EventData } from "data/observable";
import { Button } from "ui/button";

@Component({
    moduleId: module.id,
    templateUrl: "./tap-event.component.html"
})
export class ButtonTapEventComponent {

    public counter: number = 0;

    // >> button-tap-event-code
    onTap(args: EventData) {
        let button = <Button>args.object;

        this.counter++;
        alert("Tapped " + this.counter + " times!");
    }
    // << button-tap-event-code
}
