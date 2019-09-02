// >> swipe-code
import { Component } from "@angular/core";
import { SwipeGestureEventData } from "tns-core-modules/ui/gestures";

@Component({
    moduleId: module.id,
    templateUrl: "./swipe.component.html"
})
export class SwipeExampleComponent {
    public direction: number;

    onSwipe(args: SwipeGestureEventData) {
        console.log("Swipe!");
        console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);
        console.log("Swipe Direction: " + args.direction);
        // >> (hide)
        this.direction = args.direction;
        // << (hide)
    }
}
// << swipe-code
