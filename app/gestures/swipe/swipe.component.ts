import { Component}  from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { GridLayout } from "ui/layouts/grid-layout";
// >> swipe-code 
import { SwipeGestureEventData } from "ui/gestures";

@Component({
    selector: "swipe-gesture",
    styleUrls:["gestures/swipe/swipe.component.css"],
    // >> (hide)
    directives: [COMMON_DIRECTIVES],
    // << (hide)
    templateUrl: "gestures/swipe/swipe.component.html"
})

export class SwipeExampleComponent {
    public direction: number;

    onSwipe(args: SwipeGestureEventData) {
        console.log("Swipe!")
        console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);   
        console.log("Swipe Direction: " + args.direction);

        this.direction = args.direction;
    }   
}
// << swipe-code