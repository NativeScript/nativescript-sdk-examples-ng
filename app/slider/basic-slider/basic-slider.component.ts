import { Component, ChangeDetectionStrategy } from "@angular/core";
import { EventData } from "data/observable";
import { COMMON_DIRECTIVES } from '../../directives';
import { SegmentedBarItem } from "ui/segmented-bar";

@Component({
    selector: 'slider-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'slider/basic-slider/basic-slider.component.html',
    styleUrls:['slider/basic-slider/style.css']
})

export class BasicSliderComponent {
    public labeltext = 0;
}