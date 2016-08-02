import { Component}  from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import { GridLayout } from "ui/layouts/grid-layout";
// >> pinch-code 
import { PinchGestureEventData } from "ui/gestures";

let startScale = 1;

@Component({
    selector: "pinch-gesture",
    styleUrls:["gestures/pinch/pinch.component.css"],
    // >> (hide)
    directives: [COMMON_DIRECTIVES],
    // << (hide)
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
        this.state - args.state;

        // >> (hide)
        var grid = <GridLayout>args.object;

        if (args.state === 1) {
            const newOriginX = args.getFocusX() - grid.translateX;
            const newOriginY = args.getFocusY() - grid.translateY;

            const oldOriginX = grid.originX * grid.getMeasuredWidth();
            const oldOriginY = grid.originY * grid.getMeasuredHeight();

            grid.translateX += (oldOriginX - newOriginX) * (1 - grid.scaleX);
            grid.translateY += (oldOriginY - newOriginY) * (1 - grid.scaleY);

            grid.originX = newOriginX / grid.getMeasuredWidth();
            grid.originY = newOriginY / grid.getMeasuredHeight();

            startScale = grid.scaleX;
        }

        else if (args.scale && args.scale !== 1) {
            let newScale = startScale * args.scale;

            grid.scaleX = newScale;
            grid.scaleY = newScale;
        }
         // << (hide)
    }    
}
// << pinch-code