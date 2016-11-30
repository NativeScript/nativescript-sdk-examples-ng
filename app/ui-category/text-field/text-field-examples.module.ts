import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { TextFieldExamplesComponent } from "./text-field-examples.component";
import { BasicTextFieldComponent } from "./basic-text-field/basic-text-field.component";
import { TextFieldBindingComponent } from "./text-field-binding/text-field-binding.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: TextFieldExamplesComponent
    },
    {
        path: "basic",
        component: BasicTextFieldComponent,
        data: { title: "Basic TextField" }
    },
    {
        path: "binding",
        component: TextFieldBindingComponent,
        data: { title: "TextField binding" }
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
    declarations: [TextFieldExamplesComponent, BasicTextFieldComponent, TextFieldBindingComponent]
})

export class TextFieldExamplesModule {
    constructor() { }
}
