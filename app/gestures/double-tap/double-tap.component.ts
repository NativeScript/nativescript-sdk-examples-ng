// >> double-tap-code 
import { Component}  from "@angular/core";
import { GestureEventData } from "ui/gestures";

import { GridLayout } from "ui/layouts/grid-layout";

@Component({
    selector: "double-tap-gesture",
    styleUrls:["gestures/double-tap/double-tap.component.css"],
    templateUrl: "gestures/double-tap/double-tap.component.html"
})

export class DoubleTapExampleComponent {

    onDoubleTap(args: GestureEventData) {
        console.log("DoubleTap!")
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
// << double-tap-code
