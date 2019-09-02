import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

import { TabsExamplesComponent } from "./tabs-examples.component";
import { UsageComponent } from "./usage/usage.component";
import { TabsStylingComponent } from "./styling/styling.component";
export const routerConfig = [
    {
        path: "",
        component: TabsExamplesComponent

    },
    {
        path: "usage",
        component: UsageComponent,
        data: { title: "Usage" }
    },
    {
        path: "styling",
        component: TabsStylingComponent,
        data: { title: "Styling" }
    },
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
        TabsExamplesComponent,
        TabsStylingComponent,
        UsageComponent
    ]
})

export class TabsExamplesModule { }
