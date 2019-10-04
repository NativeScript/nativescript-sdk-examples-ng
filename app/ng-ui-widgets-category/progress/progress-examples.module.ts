import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ProgressExamplesComponent } from "./progress-examples.component";
import { UsageComponent } from "./usage/usage.component";
import { TipsAndTricksComponent } from "./tips-and-tricks/tips-and-tricks.component";
import { StylingComponent } from "./styling/styling.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ProgressExamplesComponent
    },
    {
        path: "usage",
        component: UsageComponent,
        data: { title: "Usage" }
    },
    {
        path: "tips-and-tricks",
        component: TipsAndTricksComponent,
        data: { title: "Tips and Tricks" }
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
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        ProgressExamplesComponent,
        UsageComponent,
        TipsAndTricksComponent,
        StylingComponent
    ]
})

export class ProgressExamplesModule {
    constructor() { }
}
