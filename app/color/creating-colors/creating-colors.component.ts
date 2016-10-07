import { Component } from "@angular/core";
// >> creating-colors-code
import { Color } from "color";
// << creating-colors-code
@Component({
    styleUrls:["color/creating-colors/creating-colors.component.css"],
    selector: 'creating-colors-component',
    templateUrl: 'color/creating-colors/creating-colors.component.html'
})

export class CreatingColorsExampleComponent {
    public hexValue: string;
    public hexColor: Color;

    public alphaValue: number = 40;
    public redValue: number = 90;
    public greenValue: number = 140;
    public blueValue: number = 190;

    constructor() { }

    public changeColor(value: string) {
        if(value[0] !== '#') {
            value = "#" + value;
        }
        var isValidHexColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);

        if (isValidHexColor) {

            this.hexColor = new Color(value);

            // >> creating-hex-color-code
            var colorHex = new Color("#FF00CC");
            // << creating-hex-color-code

            // >> creating-short-hex-color-code
            var colorShortHex = new Color("#F0C");
            // << creating-short-hex-color-code

            // >> creating-argb-color
            // Creates the color with 100 alpha, 255 red, 100 green, 100 blue
            var colorARGB = new Color(100, 255, 100, 100);
            // << creating-argb-color

            // >> creating-single-argb-color
            // Creates the color with 100 alpha, 100 red, 100 green, 100 blue
            var argb = (100 << 24) | (100 << 16) | (100 << 8) | 100;
            var colorSingleARGB = new Color(argb);
            // << creating-single-argb-color
        }   
    }
  
    public changeColorWithSliders() {
        this.hexColor = new Color(this.alphaValue, this.redValue, this.greenValue, this.blueValue);
    }
}