import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { TimerExamplesComponent } from "./timer-examples.component";
import { SetIntervalComponent } from "./setinterval/setinterval-example";
import { SetTimeoutComponent } from "./settimeout/settimeout-example";

export const routerConfig = [
    {
        path: '',
        component: TimerExamplesComponent
    },
    {
        path: 'setinterval',
        component: SetIntervalComponent
    },
    {
        path: 'settimeout',
        component: SetTimeoutComponent
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptFormsModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [TimerExamplesComponent, SetIntervalComponent, SetTimeoutComponent]
})

export class TimerExamplesModule {
    constructor() { }
}
