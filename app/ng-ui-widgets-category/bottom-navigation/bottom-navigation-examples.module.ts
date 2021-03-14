import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NativeScriptFormsModule } from "@nativescript/angular";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

import { BottomNavigationExamplesComponent } from "./bottom-navigation-examples.component";
import { BottomNavUsageComponent } from "./usage/usage.component";
import { BottomNavStylingComponent } from "./styling/styling.component";

export const routerConfig = [
    {
        path: "",
        component: BottomNavigationExamplesComponent
    },
    {
        path: "usage",
        component: BottomNavUsageComponent,
        data: { title: "Usage" }
    },
    {
        path: "styling",
        component: BottomNavStylingComponent,
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
        BottomNavigationExamplesComponent,
        BottomNavUsageComponent,
        BottomNavStylingComponent
    ]
})

export class BottomNavigationExamplesModule {
    constructor() { }
}
