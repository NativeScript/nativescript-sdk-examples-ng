import { Component}  from "@angular/core";
import { GridLayout } from "ui/layouts/grid-layout";
// >> pinch-code 
import { PinchGestureEventData } from "ui/gestures";

let startScale = 1;

@Component({
    selector: "pinch-gesture",
    styleUrls:["gestures/pinch/pinch.component.css"],
    templateUrl: "gestures/pinch/pinch.component.html"
})

export class PinchExampleComponent {
    public scale: number;
    public state: number;

    onPinch(args: PinchGestureEventData) {
        console.log("Pinch!")
        console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);   
        console.log("Pinch scale: " + args.scale + " state: " + args.state);

        this.scale = args.scale;
        this.state = args.state;

        // >> (hide)
        var grid = <GridLayout>args.object;

        if (args.scale && args.scale !== 1) {
            let newScale = startScale * args.scale;

            grid.scaleX = newScale;
            grid.scaleY = newScale;
        }
         // << (hide)
    }    
}
// << pinch-code
