import { Component } from "@angular/core";
import { GridLayout } from "ui/layouts/grid-layout";
// >> rotation-code
import { RotationGestureEventData } from "ui/gestures";

@Component({
    moduleId: module.id,
    templateUrl: "ui-category/gestures/rotation/rotation.component.html"
})
export class RotationExampleComponent {
    public angle: number;
    public state: number;

    onRotation(args: RotationGestureEventData) {
        console.log("Rotation!");
        console.log("Object that triggered the event: " + args.object);
        console.log("View that triggered the event: " + args.view);
        console.log("Event name: " + args.eventName);
        console.log("Rotate angle: " + args.rotation + " state: " + args.state);

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
    }
}
// << rotation-code
