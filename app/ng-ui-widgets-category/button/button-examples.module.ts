import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { ButtonExamplesComponent } from "./button-examples.component";
import { NativeScriptFormsModule } from "@nativescript/angular";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

import { ButtonUsageComponent } from "./usage/usage.component";
import { ButtonStylingComponent } from "./styling/styling.component";

export const routerConfig = [
    {
        path: "",
        component: ButtonExamplesComponent
    },
    {
        path: "usage",
        component: ButtonUsageComponent,
        data: { title: "Usage" }
    },
    {
        path: "styling",
        component: ButtonStylingComponent,
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
        ButtonExamplesComponent,
        ButtonUsageComponent, ButtonStylingComponent
    ]
})

export class ButtonExamplesModule {
    constructor() { }
}
