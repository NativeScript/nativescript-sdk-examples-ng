import { Component } from "@angular/core";
import { View } from "ui/core/view";

@Component({
    selector: 'animations-component',
    templateUrl: 'animations/chaining-animations/chaining-animations.component.html'
})

export class ChainingAnimationsComponent {

    // >> chaining-animations-code
    animate(target: View) {
        let duration = 300;
        target.animate({ opacity: 0, duration: duration })
            .then(() => target.animate({ opacity: 1, duration: duration }))
            .then(() => target.animate({ translate: { x: 200, y: 200 }, duration: duration }))
            .then(() => target.animate({ translate: { x: 0, y: 0 }, duration: duration }))
            .then(() => target.animate({ scale: { x: 5, y: 5 }, duration: duration }))
            .then(() => target.animate({ scale: { x: 1, y: 1 }, duration: duration }))
            .then(() => target.animate({ rotate: 180, duration: duration }))
            .then(() => target.animate({ rotate: 0, duration: duration }))
            .then(() => {
                //console.log("Animation finished");
            })
            .catch((e) => {
                console.log(e.message);
            });
    }
    // << chaining-animations-code
}
