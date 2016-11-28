import { Component } from "@angular/core";
import { GridLayout } from "ui/layouts/grid-layout";

// >> long-press-code
import { GestureEventData } from "ui/gestures";

@Component({
    templateUrl: "ui-category/gestures/long-press/long-press.component.html"
})
export class LongPressExampleComponent {
    onLongPress(args: GestureEventData) {
        console.log("LongPress!");
        console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);

        let grid = <GridLayout>args.object;
        grid.rotate = 0;
        grid.animate({
            rotate: 360,
            duration: 2000
        });
    }
}
// << long-press-code
