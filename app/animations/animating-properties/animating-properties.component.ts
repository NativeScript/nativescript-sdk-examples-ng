import { Component } from "@angular/core";
import { Color } from "color";
import { Label } from "ui/label";

var enums = require("ui/enums");

@Component({
    selector: 'animations-component',
    templateUrl: 'animations/animating-properties/animating-properties.component.html'
})

export class AnimatingPropertiesComponent {
    animate(label : Label) {
        // >> animation-animating-properties-code
        label.animate({
            opacity: 0.75,
            backgroundColor: new Color("Blue"),
            translate: { x: 100, y: 100 },
            scale: { x: 2, y: 2 },
            rotate: 180,
            duration: 3000,
            delay: 20,
            iterations: 5,
            curve: enums.AnimationCurve.easeIn
            })
            .then(() => {
                console.log("Animation finished.");
            })
            .catch((e) => {
                console.log(e.message);
            });
        // << animation-animating-properties-code
    }
}
