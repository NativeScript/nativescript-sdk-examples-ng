import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { DatePickerExamplesComponent } from "./date-picker-examples.component";
import { ConfigureDatePickerComponent } from "./configure-date-picker/configure-date-picker.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: DatePickerExamplesComponent
    },
    {
        path: "configure",
        component: ConfigureDatePickerComponent,
        data: { title: "Configure DatePicker" }
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
    declarations: [DatePickerExamplesComponent, ConfigureDatePickerComponent]
})

export class DatePickerExamplesModule {
    constructor() { }
}
