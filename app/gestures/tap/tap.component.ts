import { Component}  from "@angular/core";
import { GridLayout } from "ui/layouts/grid-layout";
// >> tap-code 
import { GestureEventData } from "ui/gestures";

@Component({
    selector: "tap-gestures",
    styleUrls:["gestures/tap/tap.component.css"],
    templateUrl: "gestures/tap/tap.component.html"
})

export class TapExampleComponent {
    onTap(args: GestureEventData) {
        console.log("Tap!")
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
// << tap-code
