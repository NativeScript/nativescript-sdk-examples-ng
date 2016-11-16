import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ApplicationSettingsExamplesComponent } from "./application-settings-examples.component";
import { ValuesExampleComponent } from "./values/values.component";

export const routerConfig = [
    {
        path: '',
        component: ApplicationSettingsExamplesComponent
    },
    {
        path: 'values',
        component: ValuesExampleComponent,
        data: { title: "Check The Target Platform" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [ApplicationSettingsExamplesComponent, ValuesExampleComponent]
})

export class ApplicationSettingsExamplesModule {
    constructor() { }
}
