import { Component } from "@angular/core";
import { EventData } from "data/observable";

@Component({
    moduleId: module.id,
    templateUrl: "ui-category/button/tap-event/tap-event.component.html"
})
export class ButtonTapEventComponent {

    public counter: number = 0;

    // >> button-tap-event-code
    onTap(args: EventData) {
        this.counter++;
        alert("Tapped " + this.counter + " times!");
    }
    // << button-tap-event-code
}
