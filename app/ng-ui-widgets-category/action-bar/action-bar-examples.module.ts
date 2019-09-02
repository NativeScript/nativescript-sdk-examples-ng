import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ActionBarExamplesComponent } from "./action-bar-examples.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

import { ActionBarUsageComponent } from "./usage/usage.component";
import { ActionBarStylingComponent } from "./styling/styling.component";

export const routerConfig = [
    {
        path: "",
        component: ActionBarExamplesComponent
    },
    {
        path: "usage",
        component: ActionBarUsageComponent,
        data: { title: "Usage" }
    },
    {
        path: "styling",
        component: ActionBarStylingComponent,
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
        ActionBarExamplesComponent,
        ActionBarUsageComponent,
        ActionBarStylingComponent
    ]
})

export class ActionBarExamplesModule {
    constructor() { }
}
