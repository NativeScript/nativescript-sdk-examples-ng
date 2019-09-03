import { Component } from "@angular/core";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
// >> pinch-code
import { PinchGestureEventData } from "tns-core-modules/ui/gestures";
// >> (hide)
let startScale = 1;
// << (hide)
@Component({
    moduleId: module.id,
    templateUrl: "./pinch.component.html"
})
export class PinchExampleComponent {
    // >> (hide)
    public scale: number;
    public state: number;
    // << (hide)
    onPinch(args: PinchGestureEventData) {
        console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);
        console.log("Pinch scale: " + args.scale + " state: " + args.state);
        // >> (hide)
        this.scale = args.scale;
        this.state = args.state;
        let grid = <GridLayout>args.object;
        if (args.scale && args.scale !== 1) {
            let newScale = startScale * args.scale;
            grid.scaleX = newScale;
            grid.scaleY = newScale;
        }
        // << (hide)
    }
}
// << pinch-code
