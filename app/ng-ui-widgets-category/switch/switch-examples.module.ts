import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SwitchExamplesComponent } from "./switch-examples.component";
import { BasicSwitchComponent } from "./usage/usage.component";
import { StylingSwitchComponent } from "./styling/styling-switch.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: SwitchExamplesComponent
    },
    {
        path: "usage",
        component: BasicSwitchComponent,
        data: { title: "Usage" }
    },
    {
        path: "styling",
        component: StylingSwitchComponent,
        data: { title: "Styling" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        SwitchExamplesComponent,
        BasicSwitchComponent,
        StylingSwitchComponent
    ]
})

export class SwitchExamplesModule {
    constructor() { }
}
