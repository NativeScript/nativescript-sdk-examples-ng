import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

import { TabsExamplesComponent } from "./tabs-examples.component";
import { UsageComponent } from "./usage/usage.component";
import { ThemingComponent } from "./theming/theming.component";
import { EventsComponent } from "./events/events.component";
import { PropertiesComponent } from "./properties/properties.component";

export const routerConfig = [
    {
        path: "",
        component: TabsExamplesComponent

    },
    {
        path: "usage",
        component: UsageComponent,
        data: { title: "Usage" }
    },
    {
        path: "theming",
        component: ThemingComponent,
        data: { title: "Theming" }
    },
    {
        path: "events",
        component: EventsComponent,
        data: { title: "Events" }
    },
    {
        path: "properties",
        component: PropertiesComponent,
        data: { title: "Properties" }
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
        TabsExamplesComponent,
        EventsComponent,
        UsageComponent,
        PropertiesComponent,
        ThemingComponent
    ]
})

export class TabsExamplesModule { }
