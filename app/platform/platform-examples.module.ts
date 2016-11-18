import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { PlatformExamplesComponent } from "./platform-examples.component";
import { PlatformModuleExampleComponent } from "./platform-module-example/platform-module-example";

export const routerConfig = [
    {
        path: '',
        component: PlatformExamplesComponent
    },
    {
        path: 'platform-module',
        component: PlatformModuleExampleComponent,
        data: { title: "Using platform module" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [PlatformExamplesComponent, PlatformModuleExampleComponent]
})

export class PlatformPageExamplesModule {
    constructor() { }
}
