import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { SwitchExamplesComponent } from "./switch-examples.component";
import { BasicSwitchComponent } from "./basic-switch/basic-switch.component";
import { DisableSwitchComponent } from "./disable-switch/disable-switch.component";
import { StylingSwitchComponent } from "./styling-switch/styling-switch.component";

export const routerConfig = [
    {
        path: '',
        component: SwitchExamplesComponent
    },
    {
        path: 'basic',
        component: BasicSwitchComponent,
        data: { title: "Basic Switch" }
    },
    {
        path: 'disable',
        component: DisableSwitchComponent,
        data: { title: "Disable Switch component" }
    },
    {
        path: 'styling',
        component: StylingSwitchComponent,
        data: { title: "Styling Switch component" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [SwitchExamplesComponent, BasicSwitchComponent, DisableSwitchComponent, StylingSwitchComponent]
})

export class SwitchExamplesModule {
    constructor() { }
}
