import { Component } from "@angular/core";
// >> touch-code
import { TouchGestureEventData } from "tns-core-modules/ui/gestures";

@Component({
    moduleId: module.id,
    templateUrl: "./touch.component.html"
})
export class TouchExampleComponent {
    // >> (hide)
    public coordX: number = 0;
    public coordY: number = 0;
    // << (hide)
    onTouch(args: TouchGestureEventData) {
        console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);
        console.log("Touch action (up, down, cancel or move)" + args.action);
        console.log("Touch point: [" + args.getX() + ", " + args.getY() + "]");
        console.log("activePointers: " + args.getActivePointers().length);
        // >> (hide)
        this.coordX = args.getX();
        this.coordY = args.getY();
        // << (hide)
    }
}
// << touch-code
