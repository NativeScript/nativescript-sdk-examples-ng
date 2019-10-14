// tslint:disable:no-bitwise
// >> creating-colors-code
import { Component } from "@angular/core";
import { Color } from "tns-core-modules/color";
import * as colors from "tns-core-modules/color/known-colors";
import { isKnownName } from "tns-core-modules/color/known-colors";

@Component({
    moduleId: module.id,
    templateUrl: "./usage.component.html"
})
export class UsageComponent {

    createColor() {
        // Using hex values to create color;
        let colorHex = new Color("#FF00CC");
        let colorShortHex = new Color("#F0C");

        // Creates the color with 100 alpha, 255 red, 100 green, 100 blue
        let colorARGB = new Color(100, 255, 100, 100);

        // Creates the color with 100 alpha, 100 red, 100 green, 100 blue
        let argb = (100 << 24) | (100 << 16) | (100 << 8) | 100;
        let colorSingleARGB = new Color(argb);

        // Using string values to create colors
        let namedColor = "orangered";
        let isKnown: boolean = isKnownName(namedColor);
        if (isKnown) {
            let colorName = new Color(namedColor);
        }

        // Using supported known colors from tns-core-modules/color/known-colors
        let colorKnownName = new Color(colors.OrangeRed);
    }
}
// << creating-colors-code
