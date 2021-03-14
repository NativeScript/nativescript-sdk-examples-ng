// tslint:disable:max-line-length
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { WebViewExamplesComponent } from "./web-view-examples.component";
import { UsageComponent } from "./usage/usage.component";
import { TipsAndTricksComponent } from "./tips-and-tricks/tips-and-tricks.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: WebViewExamplesComponent
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
    declarations: [WebViewExamplesComponent, UsageComponent, TipsAndTricksComponent]
})

export class WebViewExamplesModule { }

