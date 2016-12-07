import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
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
        component: FpsMeterUsageComponent
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptModule,
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
