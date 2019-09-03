import { Component } from "@angular/core";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
// >> rotation-code
import { RotationGestureEventData } from "tns-core-modules/ui/gestures";

@Component({
    moduleId: module.id,
    templateUrl: "./rotation.component.html"
})
export class RotationExampleComponent {
    // >> (hide)
    public angle: number;
    public state: number;
    // << (hide)

    onRotation(args: RotationGestureEventData) {
        console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);
        console.log("Rotate angle: " + args.rotation + " state: " + args.state);
        // >> (hide)
        this.angle = args.rotation;
        this.state = args.state;

        if (this.state === 3) {
            let grid = <GridLayout>args.object;
            grid.rotate = 0;
            grid.animate({
                rotate: this.angle,
                duration: 200
            });
        }
        // << (hide)
    }
}
// << rotation-code
