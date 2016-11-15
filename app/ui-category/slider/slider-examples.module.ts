import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { SliderExamplesComponent } from "./slider-examples.component";
import { BasicSliderComponent } from "./basic-slider/basic-slider.component";
import { SliderAccessValueComponent } from "./slider-access-value-code/slider-access-value.component";

export const routerConfig = [
    {
        path: '',
        component: SliderExamplesComponent
    },
    {
        path: 'basic',
        component: BasicSliderComponent,
        data: { title: "Basic Slider" }
    },
    {
        path: 'value',
        component: SliderAccessValueComponent,
        data: { title: "Slider's value" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [SliderExamplesComponent, BasicSliderComponent, SliderAccessValueComponent]
})

export class SliderExamplesModule {
    constructor() { }
}
