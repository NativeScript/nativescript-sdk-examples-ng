import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NativeScriptHttpClientModule } from "@nativescript/angular";
import { ActivityIndicatorExamplesComponent } from "./activity-indicator-examples.component";
import { ActivityIndicatorUsageComponent } from "./usage/usage.component";
import { ActivityIndicatorStylingComponent } from "./styling/styling.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ActivityIndicatorExamplesComponent
    },
    {
        path: "usage",
        component: ActivityIndicatorUsageComponent,
        data: { title: "Usage" }
    },
    {
        path: "styling",
        component: ActivityIndicatorStylingComponent,
        data: { title: "Styling" }
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
        ActivityIndicatorUsageComponent,
        ActivityIndicatorStylingComponent
    ]
})

export class ActivityIndicatorExamplesModule {
    constructor() { }
}
