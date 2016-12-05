// tslint:disable:no-bitwise
import { Component, PipeTransform, Pipe } from "@angular/core";
// >> creating-colors-code
import { Color } from "color";
// << creating-colors-code

@Pipe({
    name: "sdkHex"
})
export class HexPipe implements PipeTransform {
    transform(value: number): any {
        value = Math.floor(value);
        let res = value.toString(16);
        if (res.length === 1) {
            res = "0" + res;
        }
        return res;
    }
}

@Component({
    moduleId: module.id,
    templateUrl: "./creating-colors.component.html"
})
export class CreatingColorsExampleComponent {
    public redValue: number = 0;
    public greenValue: number = 0;
    public blueValue: number = 0;

    public changeColor(value: string) {
        if (value[0] !== "#") {
            value = "#" + value;
        }
        let isValidHexColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);

        if (isValidHexColor) {
            let rgbColors = this.convertHex(value);
            this.redValue = rgbColors[0];
            this.greenValue = rgbColors[1];
            this.blueValue = rgbColors[2];
        } else {
            console.log("Invalid hex value entered");
        }
    }

    convertHex(hex) {
        hex = hex.replace("#", "");

        if (hex.length !== 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }

        let red = parseInt(hex.substring(0, 2), 16);
        let green = parseInt(hex.substring(2, 4), 16);
        let blue = parseInt(hex.substring(4, 6), 16);

        let colorRGB = [red, green, blue];
        return colorRGB;
    }
}

export function codeSnippets() {
    // >> creating-hex-color-code
    let colorHex = new Color("#FF00CC");
    // << creating-hex-color-code
    console.log(colorHex);

    // >> creating-short-hex-color-code
    let colorShortHex = new Color("#F0C");
    // << creating-short-hex-color-code
    console.log(colorShortHex);

    // >> creating-argb-color
    // Creates the color with 100 alpha, 255 red, 100 green, 100 blue
    let colorARGB = new Color(100, 255, 100, 100);
    // << creating-argb-color
    console.log(colorARGB);

    // >> creating-single-argb-color
    // Creates the color with 100 alpha, 100 red, 100 green, 100 blue
    let argb = (100 << 24) | (100 << 16) | (100 << 8) | 100;
    let colorSingleARGB = new Color(argb);
    // << creating-single-argb-color
    console.log(colorSingleARGB);
}
