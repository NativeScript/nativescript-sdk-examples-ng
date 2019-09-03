import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ListPickerExamplesComponent } from "./listpicker-examples.component";
import { ListPickerUsageComponent } from "./usage/usage.component";
import { ListPickerStylingComponent } from "./styling/styling.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ListPickerExamplesComponent
    },
    {
        path: "usage",
        component: ListPickerUsageComponent,
        data: { title: "Usage" }
    },
    {
        path: "styling",
        component: ListPickerStylingComponent,
        data: { title: "Styling" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        ListPickerExamplesComponent,
        ListPickerUsageComponent,
        ListPickerStylingComponent
    ]
})

export class ListPickerExamplesModule {
    constructor() { }
}
