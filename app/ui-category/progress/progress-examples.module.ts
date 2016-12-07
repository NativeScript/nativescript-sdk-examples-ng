import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ProgressExamplesComponent } from "./progress-examples.component";
import { CreatingProgressComponent } from "./creating-progress/creating-progress.component";
import { SettingProgressComponent } from "./setting-progress/setting-progress.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ProgressExamplesComponent
    },
    {
        path: "creating-progress",
        component: CreatingProgressComponent,
        data: { title: "Create Progress" }
    },
    {
        path: "setting-progress",
        component: SettingProgressComponent,
        data: { title: "Set up Progress" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        ProgressExamplesComponent,
        CreatingProgressComponent,
        SettingProgressComponent
    ]
})

export class ProgressExamplesModule {
    constructor() { }
}
