// >> double-tap-code
import { Component } from "@angular/core";
import { GestureEventData } from "tns-core-modules/ui/gestures";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";

@Component({
    moduleId: module.id,
    templateUrl: "./double-tap.component.html"
})
export class DoubleTapExampleComponent {
    onDoubleTap(args: GestureEventData) {
        console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);
        // >> (hide)
        let grid = <GridLayout>args.object;
        grid.rotate = 0;
        grid.animate({
            rotate: 360,
            duration: 2000
        });
        // << (hide)
    }
}
// << double-tap-code
