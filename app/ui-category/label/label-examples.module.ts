import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { LabelExamplesComponent } from "./label-examples.component";
import { CreatingLabelComponent } from "./creating-label/creating-label.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: LabelExamplesComponent
    },
    {
        path: "creating-label",
        component: CreatingLabelComponent,
        data: { title: "Create Label" }
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
        CreatingLabelComponent
    ]
})

export class LabelExamplesModule {
    constructor() { }
}
