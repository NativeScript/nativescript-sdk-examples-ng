import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { FormattedStringExamplesComponent } from "./formated-string-examples.component";
import { FormattedStringUsageComponent } from "./usage/usage.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: FormattedStringExamplesComponent
    },
    {
        path: "usage",
        component: FormattedStringUsageComponent,
        data: { title: "Usage" }
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
    declarations: [FormattedStringExamplesComponent, FormattedStringUsageComponent]
})

export class FormattedStringExamplesModule {
    constructor() { }
}
