// >> slider-setting-default-values
import { Component } from "@angular/core";
// >> (hide)
import { COMMON_DIRECTIVES } from '../../directives';
// << (hide)
@Component({
    selector: 'slider-access-value-component',
    // >> (hide)
    directives: [COMMON_DIRECTIVES],
    // << (hide)
    templateUrl: 'slider/slider-access-value-code/slider-access-value.component.html',
})

export class SliderAccessValueComponent {
    
    public sliderValue = 10;
    public sliderValue2 = 40;
    public sliderValue3 = 30;
    public sliderValue4 = 80;
    public sliderValue5 = 100;

    public onTap(){
        var alertView = "First Slider: "+this.sliderValue+"\n"+
        "Second Slider: "+this.sliderValue2+"\n"+
        "Third Slider: "+this.sliderValue3+"\n"+
        "Fourth Slider: "+this.sliderValue4+"\n"+
        "Fifth Slider: "+this.sliderValue5;
        alert(alertView);
    }

}
// << slider-setting-default-values