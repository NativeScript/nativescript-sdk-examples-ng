import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { ActivityIndicatorExamplesComponent } from "./activity-indicator-examples.component";
import { SettingBusyComponent } from "./setting-busy/setting-busy.component";
import { SettingBusyHttpRequestComponent } from "./setting-busy-http-request/setting-busy-http-request.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ActivityIndicatorExamplesComponent
    },
    {
        path: "setting-busy",
        component: SettingBusyComponent,
        data: { title: "Set busy property" }
    },
    {
        path: "setting-busy-http-request",
        component: SettingBusyHttpRequestComponent,
        data: { title: "Set busy property(during HTTP Request)" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptHttpClientModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        ActivityIndicatorExamplesComponent,
        SettingBusyComponent,
        SettingBusyHttpRequestComponent
    ]
})

export class ActivityIndicatorExamplesModule {
    constructor() { }
}
