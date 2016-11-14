import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { FormattedStringExamplesComponent } from "./formated-string-examples.component";
import { CreateFormattedStringComponent } from "./create-formatted-string/create-formatted-string.component";

export const routerConfig = [
    {
        path: '',
        component: FormattedStringExamplesComponent
    },
    {
        path: 'create-formatted-string',
        component: CreateFormattedStringComponent,
        data: { title: "Create Formatted String" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [FormattedStringExamplesComponent, CreateFormattedStringComponent]
})

export class FormattedStringExamplesModule {
    constructor() { }
}
