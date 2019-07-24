import { Component, ViewChild, ElementRef } from "@angular/core";
import { AnimationCurve  } from "tns-core-modules/ui/enums";


@Component({
    moduleId: module.id,
    templateUrl: "./width-height-properties.component.html",
    styleUrls: ["./width-height-properties.component.css"],
})
export class WidthHeightPropertiesComponent {
    // >> animation-properties-width-height-ng
    @ViewChild("target", { read: ElementRef, static: false }) view: ElementRef;
    constructor() { }

    animateWidth() {
        this.view.nativeElement.animate({
            width: 320,
            duration: 1000,
            curve: AnimationCurve.easeIn
        });
    }

    animateHeight() {
        this.view.nativeElement.animate({
            height: 400,
            duration: 1000,
            curve: AnimationCurve.easeIn
        });
    }
    // << animation-properties-width-height-ng
}
