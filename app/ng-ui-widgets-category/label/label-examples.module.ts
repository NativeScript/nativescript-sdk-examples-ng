import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { LabelExamplesComponent } from "./label-examples.component";
import { LabelUsageComponent } from "./usage/usage.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: LabelExamplesComponent
    },
    {
        path: "usage",
        component: LabelUsageComponent,
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
    declarations: [
        LabelExamplesComponent,
        LabelUsageComponent
    ]
})

export class LabelExamplesModule {
    constructor() { }
}
