import { Component}  from "@angular/core";
// >> touch-code 
import { TouchGestureEventData } from "ui/gestures";

@Component({
    selector: "touch-gesture",
    styleUrls:["gestures/touch/touch.component.css"],
    templateUrl: "gestures/touch/touch.component.html"
})

export class TouchExampleComponent {
	public coordX: number = 0;
    public coordY: number = 0;

    onTouch(args: TouchGestureEventData) {
        console.log("Touch!")
        console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);   
        console.log("Touch point: [" + args.getX() + ", " + args.getY() + "] activePointers: " + args.getActivePointers().length);

        this.coordX = args.getX();
        this.coordY = args.getY();
    } 
}
// << touch-code
