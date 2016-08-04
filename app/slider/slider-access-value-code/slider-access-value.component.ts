import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';

@Component({
    selector: 'slider-access-value-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'slider/slider-access-value-code/slider-access-value.component.html',
})

export class SliderAccessValueComponent {
    // >> slider-setting-default-values
    public sliderValue = 10;
    public sliderValue2 = 40;
    public sliderValue3 = 30;
    public sliderValue4 = 80;
    public sliderValue5 = 100;

    public onTap(){
        var alertView = "First Slider"+this.sliderValue+"\n"+
        "Second Slider"+this.sliderValue2+"\n"+
        "Third Slider"+this.sliderValue3+"\n"+
        "Fourth Slider"+this.sliderValue4+"\n"+
        "Fifth Slider"+this.sliderValue5;
        alert(alertView);
    }

    // << slider-setting-default-values

}
