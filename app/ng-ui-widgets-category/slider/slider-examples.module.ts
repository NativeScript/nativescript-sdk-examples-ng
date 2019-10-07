import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { SliderExamplesComponent } from "./slider-examples.component";
import { UsageComponent } from "./usage/usage.component";
import { StylingComponent } from "./styling/styling.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: SliderExamplesComponent
    },
    {
        path: "usage",
        component: UsageComponent,
        data: { title: "Usage" }
    },
    {
        path: "styling",
        component: StylingComponent,
        data: { title: "Styling" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        SliderExamplesComponent,
        UsageComponent,
        StylingComponent
    ]
})

export class SliderExamplesModule {
    constructor() { }
}
