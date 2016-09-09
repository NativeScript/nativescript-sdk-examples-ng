import { Component}  from "@angular/core";
import { GridLayout } from "ui/layouts/grid-layout";

// >> long-press-code 
import { GestureEventData } from "ui/gestures";

@Component({
    selector: "long-press-gesture",
    styleUrls:["gestures/long-press/long-press.component.css"],
    templateUrl: "gestures/long-press/long-press.component.html"
})

export class LongPressExampleComponent {
   onLongPress(args: GestureEventData) {
        console.log("LongPress!")
        console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);

        var grid = <GridLayout>args.object;
        grid.rotate = 0;
        grid.animate({
            rotate: 360,
            duration: 2000
        });
    }
}
// << long-press-code
