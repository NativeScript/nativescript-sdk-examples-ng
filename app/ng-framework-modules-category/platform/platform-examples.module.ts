import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { PlatformExamplesComponent } from "./platform-examples.component";
import { PlatformModuleExampleComponent } from "./usage/platform-module-example";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: PlatformExamplesComponent
    },
    {
        path: "usage",
        component: PlatformModuleExampleComponent,
        data: { title: "Usage" }
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
        PlatformExamplesComponent,
        PlatformModuleExampleComponent
    ]
})

export class PlatformExamplesModule {
    constructor() { }
}
