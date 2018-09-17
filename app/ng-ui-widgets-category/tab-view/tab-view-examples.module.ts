import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TabViewExamplesComponent } from "./tab-view-examples.component";
import { BasicTabViewComponent } from "./basics/basic-tab-view.component";
import { TabViewIconFontsComponent } from "./title-icon-fonts/tab-view-icon-fonts.component";
import { StylingComponent } from "./styling/styling.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { TabsLimitComponent } from "./offscreen-tab-limit-android/tabs-limit.component";
import { TabsPositionComponent } from "./tabs-position-android/tabs-position.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
export const routerConfig = [
    {
        path: "",
        component: TabViewExamplesComponent
    },
    {
        path: "basic",
        component: BasicTabViewComponent,
        data: { title: "Basic TabView" }
    },
    {
        path: "styling",
        component: StylingComponent,
        data: { title: "Styling Tab View" }
    },
    {
        path: "navigation",
        component: NavigationComponent,
        data: { title: "Navigation" }
    },
    {
        path: "icon-fonts",
        component: TabViewIconFontsComponent,
        data: { title: "Using icon font in TabView" }
    },
    {
        path: "tabs-limit",
        component: TabsLimitComponent,
        data: { title: "Tabs limit(Android)" }
    },
    {
        path: "tabs-position",
        component: TabsPositionComponent,
        data: { title: "Tabs position(Android)" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        TabViewExamplesComponent,
        BasicTabViewComponent,
        StylingComponent,
        NavigationComponent,
        TabViewIconFontsComponent,
        TabsLimitComponent,
        TabsPositionComponent
    ]
})

export class TabViewExamplesModule {
    constructor() { }
}
