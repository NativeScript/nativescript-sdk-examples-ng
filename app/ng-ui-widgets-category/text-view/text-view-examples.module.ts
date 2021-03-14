import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NativeScriptFormsModule } from "@nativescript/angular";
import { TextViewExamplesComponent } from "./text-view-examples.component";
import { UsageComponent } from "./usage/usage.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: TextViewExamplesComponent
    },
    {
        path: "usage",
        component: UsageComponent,
        data: { title: "Usage" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [TextViewExamplesComponent, UsageComponent]
})

export class TextViewExamplesModule {
    constructor() { }
}
