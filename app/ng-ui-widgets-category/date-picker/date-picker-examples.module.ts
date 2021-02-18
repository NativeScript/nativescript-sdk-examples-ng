import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { DatePickerExamplesComponent } from "./date-picker-examples.component";
import { DatePickerUsageComponent } from "./usage/usage.component";
import { DatePickerStylingComponent } from "./styling/styling.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: DatePickerExamplesComponent
    },
    {
        path: "usage",
        component: DatePickerUsageComponent,
        data: { title: "Usage" }
    },
    {
        path: "styling",
        component: DatePickerStylingComponent,
        data: { title: "Styling" }
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
    declarations: [DatePickerExamplesComponent, DatePickerUsageComponent, DatePickerStylingComponent]
})

export class DatePickerExamplesModule {
    constructor() { }
}
