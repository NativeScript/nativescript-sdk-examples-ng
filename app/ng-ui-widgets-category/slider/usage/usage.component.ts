// >> basic-slider-tsc
import { Component } from "@angular/core";
import { Slider } from "tns-core-modules/ui/slider";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"
})
export class UsageComponent {
    onSliderValueChange(args) {
        let slider = <Slider>args.object;
        console.log(`Slider new value ${args.newValue}`);
    }
}
// << basic-slider-tsc