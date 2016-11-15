import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { TimePickerExamplesComponent } from "./time-picker-examples.component";
import { ConfigureTimePickerComponent } from "./configure-time-picker/configure-time-picker.component";

export const routerConfig = [
    {
        path: '',
        component: TimePickerExamplesComponent
    },
    {
        path: 'configure',
        component: ConfigureTimePickerComponent,
        data: { title: "Configure TimePicker" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [TimePickerExamplesComponent, ConfigureTimePickerComponent]
})

export class TimePickerExamplesModule {
    constructor() { }
}
