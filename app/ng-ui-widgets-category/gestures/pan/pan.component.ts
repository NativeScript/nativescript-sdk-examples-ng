import { Component } from "@angular/core";
// >> pan-code
import { PanGestureEventData } from "tns-core-modules/ui/gestures";

@Component({
    moduleId: module.id,
    templateUrl: "./pan.component.html"
})
export class PanExampleComponent {
    public deltaX: number;
    public deltaY: number;
    public state: number;

    onPan(args: PanGestureEventData) {
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
