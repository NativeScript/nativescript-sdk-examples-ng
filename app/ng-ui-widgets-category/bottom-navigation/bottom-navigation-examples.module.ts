import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

import { BottomNavigationExamplesComponent } from "./bottom-navigation-examples.component";
import { BottomNavUsageComponent } from "./usage/usage.component";
import { BottomNavStylingComponent } from "./styling/styling.component";
// import { EventsComponent } from "./events/events.component";
// import { PropertiesComponent } from "./properties/properties.component";
import { BottomNavTipsAndTricksComponent } from  "./tips-and-tricks/tips-and-tricks.component";

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
    },
    {
        path: "tips-and-tricks",
        component: BottomNavTipsAndTricksComponent,
        data: { title: "Tips & Tricks" }
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
        BottomNavStylingComponent,
        BottomNavTipsAndTricksComponent
    ]
})

export class BottomNavigationExamplesModule {
    constructor() { }
}
