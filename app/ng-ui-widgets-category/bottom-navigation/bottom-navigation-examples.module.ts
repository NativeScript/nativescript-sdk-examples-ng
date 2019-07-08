import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { BottomNavigationExamplesComponent } from "./bottom-navigation-examples.component";
import { UsageComponent } from "./usage/usage.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: BottomNavigationExamplesComponent
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
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        BottomNavigationExamplesComponent,
        UsageComponent
    ]
})

export class BottomNavigationExamplesModule {
    constructor() { }
}
