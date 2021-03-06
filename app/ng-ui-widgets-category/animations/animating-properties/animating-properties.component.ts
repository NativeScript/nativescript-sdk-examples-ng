import { Component } from "@angular/core";
import { Color, Enums, Label } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./animating-properties.component.html"
})
export class AnimatingPropertiesComponent {
    animate(label: Label) {
        // >> animation-animating-properties-code
        label.animate({
            opacity: 0.75,
            backgroundColor: new Color("Blue"),
            translate: { x: 200, y: 200 },
            scale: { x: 2, y: 2 },
            rotate: 180,
            duration: 3000,
            delay: 20,
            iterations: 5,
            curve: Enums.AnimationCurve.easeIn
        }).then(() => {
            console.log("Animation finished.");
        }).catch((e) => {
            console.log(e.message);
        });
        // << animation-animating-properties-code
    }
}
