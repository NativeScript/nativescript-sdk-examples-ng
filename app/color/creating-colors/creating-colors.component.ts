import { Component, PipeTransform, Pipe } from "@angular/core";
// >> creating-colors-code
import { Color } from "color";
// << creating-colors-code

@Pipe({
    name: "hex"
})
export class HexPipe implements PipeTransform{
    transform(value: number): any {
        let res = value.toString(16);
        if(res.length === 1){
            res = "0" + res;
        }
        return res
    }
}

@Component({
    selector: 'creating-colors-component',
    templateUrl: 'color/creating-colors/creating-colors.component.html'
})
export class CreatingColorsExampleComponent {
    private redValue: number = 0;
    private greenValue: number = 0;
    private blueValue: number = 0;

    public changeColor(value: string) {
        if (value[0] !== '#') {
            value = "#" + value;
        }
        var isValidHexColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);

        if (isValidHexColor) {
            var rgbColors = this.convertHex(value);
            this.redValue = rgbColors[0];
            this.greenValue = rgbColors[1];
            this.blueValue = rgbColors[2];
        } else {
            console.log("Invalid hex value entered");
        }
    }

    convertHex(hex) {
        hex = hex.replace('#', '');

        if (hex.length !== 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }

        var red = parseInt(hex.substring(0, 2), 16);
        var green = parseInt(hex.substring(2, 4), 16);
        var blue = parseInt(hex.substring(4, 6), 16);

        var colorRGB = [red, green, blue];
        return colorRGB;
    }
}

export function codeSnippets() {
    // >> creating-hex-color-code
    var colorHex = new Color("#FF00CC");
    // << creating-hex-color-code
    console.log(colorHex);

    // >> creating-short-hex-color-code
    var colorShortHex = new Color("#F0C");
    // << creating-short-hex-color-code
    console.log(colorShortHex);

    // >> creating-argb-color
    // Creates the color with 100 alpha, 255 red, 100 green, 100 blue
    var colorARGB = new Color(100, 255, 100, 100);
    // << creating-argb-color
    console.log(colorARGB);

    // >> creating-single-argb-color
    // Creates the color with 100 alpha, 100 red, 100 green, 100 blue
    var argb = (100 << 24) | (100 << 16) | (100 << 8) | 100;
    var colorSingleARGB = new Color(argb);
    // << creating-single-argb-color
    console.log(colorSingleARGB);
}