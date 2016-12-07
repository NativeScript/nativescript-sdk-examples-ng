import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { FormattedStringExamplesComponent } from "./formated-string-examples.component";
import { CreateFormattedStringComponent } from "./create-formatted-string/create-formatted-string.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: FormattedStringExamplesComponent
    },
    {
        path: "create-formatted-string",
        component: CreateFormattedStringComponent,
        data: { title: "Create Formatted String" }
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
    declarations: [FormattedStringExamplesComponent, CreateFormattedStringComponent]
})

export class FormattedStringExamplesModule {
    constructor() { }
}
