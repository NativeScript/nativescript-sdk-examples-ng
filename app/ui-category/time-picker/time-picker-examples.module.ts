import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { TimePickerExamplesComponent } from "./time-picker-examples.component";
import { ConfigureTimePickerComponent } from "./configure-time-picker/configure-time-picker.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: TimePickerExamplesComponent
    },
    {
        path: "configure",
        component: ConfigureTimePickerComponent,
        data: { title: "Configure TimePicker" }
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
    declarations: [TimePickerExamplesComponent, ConfigureTimePickerComponent]
})

export class TimePickerExamplesModule {
    constructor() { }
}
