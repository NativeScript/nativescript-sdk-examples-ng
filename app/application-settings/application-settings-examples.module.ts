import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ApplicationSettingsExamplesComponent } from "./application-settings-examples.component";
import { ValuesExampleComponent } from "./values/values.component";
import { TitleAndNavButtonModule } from "../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ApplicationSettingsExamplesComponent
    },
    {
        path: "values",
        component: ValuesExampleComponent,
        data: { title: "Check The Target Platform" }
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
    declarations: [ApplicationSettingsExamplesComponent, ValuesExampleComponent]
})

export class ApplicationSettingsExamplesModule {
    constructor() { }
}
