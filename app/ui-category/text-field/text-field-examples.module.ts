import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { TextFieldExamplesComponent } from "./text-field-examples.component";
import { BasicTextFieldComponent } from "./basic-text-field/basic-text-field.component";
import { TextFieldBindingComponent } from "./text-field-binding/text-field-binding.component";

export const routerConfig = [
    {
        path: '',
        component: TextFieldExamplesComponent
    },
    {
        path: 'basic',
        component: BasicTextFieldComponent,
        data: { title: "Basic TextField" }
    },
    {
        path: 'binding',
        component: TextFieldBindingComponent,
        data: { title: "TextField binding" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [TextFieldExamplesComponent, BasicTextFieldComponent, TextFieldBindingComponent]
})

export class TextFieldExamplesModule {
    constructor() { }
}
