import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TextFieldExamplesComponent } from "./text-field-examples.component";
import { UsageComponent } from "./usage/usage.component";
import { StylingComponent } from "./styling/styling.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: TextFieldExamplesComponent
    },
    {
        path: "usage",
        component: UsageComponent,
        data: { title: "Usage" }
    },
    {
        path: "styling",
        component: StylingComponent,
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
    declarations: [TextFieldExamplesComponent, UsageComponent, StylingComponent]
})

export class TextFieldExamplesModule {
    constructor() { }
}
