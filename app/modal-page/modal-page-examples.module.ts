import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ModalPageExamplesComponent } from "./modal-page-examples.component";
import { SampleModalPageModuleExampleComponent } from "./sample-modal-page-module-example/sample-modal-page-module-example";

export const routerConfig = [
    {
        path: '',
        component: ModalPageExamplesComponent
    },
    {
        path: 'sample-modal-page',
        component: SampleModalPageModuleExampleComponent,
        data: { title: "Sample modal page" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [ModalPageExamplesComponent, SampleModalPageModuleExampleComponent]
})

export class ModalPageExamplesModule {
    constructor() { }
}
