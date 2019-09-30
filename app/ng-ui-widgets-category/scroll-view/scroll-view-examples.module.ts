import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ScrollViewExamplesComponent } from "./scroll-view-examples.component";
import { UsageComponent } from "./usage/usage.component";
import { TipsAndTricksComponent } from "./tips-and-tricks/tips-and-tricks.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ScrollViewExamplesComponent
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
        ScrollViewExamplesComponent,
        UsageComponent,
        TipsAndTricksComponent
    ]
})

export class ScrollViewExamplesModule {
    constructor() { }
}
