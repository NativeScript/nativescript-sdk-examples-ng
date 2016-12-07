import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { PlatformExamplesComponent } from "./platform-examples.component";
import { PlatformModuleExampleComponent } from "./platform-module-example/platform-module-example";
import { TitleAndNavButtonModule } from "../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: PlatformExamplesComponent
    },
    {
        path: "platform-module",
        component: PlatformModuleExampleComponent,
        data: { title: "Using platform module" }
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
        PlatformExamplesComponent,
        PlatformModuleExampleComponent
    ]
})

export class PlatformExamplesModule {
    constructor() { }
}
