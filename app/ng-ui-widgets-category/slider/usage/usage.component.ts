// >> basic-slider-tsc
import { Component } from "@angular/core";
import { Slider } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"
})
export class UsageComponent {
    onSliderValueChange(args) {
        let slider = <Slider>args.object;
        console.log(`Slider new value ${args.value}`);
    }
}
// << basic-slider-tsc
