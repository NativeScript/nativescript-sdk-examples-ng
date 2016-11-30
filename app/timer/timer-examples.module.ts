import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { TimerExamplesComponent } from "./timer-examples.component";
import { SetIntervalComponent } from "./set-interval/setinterval-example";
import { SetTimeoutComponent } from "./set-timeout/settimeout-example";
import { TitleAndNavButtonModule } from "../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: TimerExamplesComponent
    },
    {
        path: "setinterval",
        component: SetIntervalComponent
    },
    {
        path: "settimeout",
        component: SetTimeoutComponent
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
        TimerExamplesComponent,
        SetIntervalComponent,
        SetTimeoutComponent
    ]
})

export class TimerExamplesModule {
    constructor() { }
}
