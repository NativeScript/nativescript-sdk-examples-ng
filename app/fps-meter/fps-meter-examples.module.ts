import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { FpsExamplesComponent } from "./fps-meter-examples.component";

import { FpsMeterUsageComponent } from "./fps-meter-usage/fps-meter";
import { TitleAndNavButtonModule } from "../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: FpsExamplesComponent
    },
    {
        path: "fps-meter-usage",
        component: FpsMeterUsageComponent,
        data: { title: "FPS meter" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        FpsExamplesComponent,
        FpsMeterUsageComponent
    ]
})

export class FpsExamplesModule {
    constructor() { }
}
