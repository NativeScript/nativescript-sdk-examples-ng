import { Component } from "@angular/core";
import { Slider } from "tns-core-modules/ui/slider";

@Component({
    moduleId: module.id,
    templateUrl: "./basic-slider.component.html",
    styleUrls: ["./../style.css"]
})
export class BasicSliderComponent {
    public currentValue: number = 10;
    public fontSize: number = 20;

    public onSliderValueChange(args) {
        let slider = <Slider>args.object;

        this.currentValue = slider.value;
    }

    public onSecondSliderChange(args) {
        let slider = <Slider>args.object;

        this.fontSize = slider.value;
    }
}
