import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ActionBarExamplesComponent } from "./action-bar-examples.component";
import { ActionItemsComponent } from "./action-items/action-items.component";
import { NavigationButtonComponent } from "./navigation-button/navigation-button.component";
import { TitleComponent } from "./title/title.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";
import { IconFontsComponent } from "./icon-fonts/icon-fonts.component";
export const routerConfig = [
    {
        path: "",
        component: ActionBarExamplesComponent
    },
    {
        path: "action-items",
        component: ActionItemsComponent,
        data: { title: "Action items" }
    },
    {
        path: "navigation-button",
        component: NavigationButtonComponent,
        data: { title: "Navigation button" }
    },
    {
        path: "title",
        component: TitleComponent,
        data: { title: "ActionBar title" }
    },
    {
        path: "icon-fonts",
        component: IconFontsComponent,
        data: { title: "Icon fonts" }
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
        ActionBarExamplesComponent,
        ActionItemsComponent,
        NavigationButtonComponent,
        TitleComponent,
        IconFontsComponent
    ]
})

export class ActionBarExamplesModule {
    constructor() { }
}
