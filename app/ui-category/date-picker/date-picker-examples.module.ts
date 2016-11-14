import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { DatePickerExamplesComponent } from "./date-picker-examples.component";
import { ConfigureDatePickerComponent } from "./configure-date-picker/configure-date-picker.component";

export const routerConfig = [
    {
        path: '',
        component: DatePickerExamplesComponent
    },
    {
        path: 'configure',
        component: ConfigureDatePickerComponent,
        data: { title: "Configure DatePicker" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [DatePickerExamplesComponent, ConfigureDatePickerComponent]
})

export class DatePickerExamplesModule {
    constructor() { }
}
