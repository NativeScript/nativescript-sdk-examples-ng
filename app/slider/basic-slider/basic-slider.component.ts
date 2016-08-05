import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';

@Component({
    selector: 'basic-slider-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'slider/basic-slider/basic-slider.component.html',
    styleUrls:['slider/basic-slider/style.css'],
})

export class BasicSliderComponent {
    public labeltext = 0;
}