import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { FpsExamplesComponent } from "./fps-meter-examples.component";

import { FpsMeterUsageComponent } from "./fps-meter-usage/fps-meter";


export const routerConfig = [
    {
        path: '',
        component: FpsExamplesComponent
    },
    {
        path: 'fps-meter-usage',
        component: FpsMeterUsageComponent
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptFormsModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [FpsExamplesComponent, FpsMeterUsageComponent ]
})

export class FpsExamplesModule {
    constructor() { }
}
