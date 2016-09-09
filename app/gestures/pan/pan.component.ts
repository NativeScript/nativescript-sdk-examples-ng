import { Component}  from "@angular/core";

// >> pan-code 
import { PanGestureEventData } from "ui/gestures";

@Component({
    selector: "pan-gesture",
    styleUrls:["gestures/pan/pan.component.css"],
    templateUrl: "gestures/pan/pan.component.html"
})

export class PanExampleComponent {
    public deltaX: number;
    public deltaY: number;
    public state: number;

    onPan(args: PanGestureEventData) {
        console.log("Pan!")
        console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);
        console.log("Pan delta: [" + args.deltaX + ", " + args.deltaY + "] state: " + args.state);

        this.deltaX = args.deltaX;
        this.deltaY = args.deltaY;
        this.state = args.state;
    }
}
// << pan-code
