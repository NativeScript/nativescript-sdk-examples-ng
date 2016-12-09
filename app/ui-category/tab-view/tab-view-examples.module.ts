import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, NativeScriptRouterModule, NativeScriptFormsModule } from "nativescript-angular";
import { TabViewExamplesComponent } from "./tab-view-examples.component";
import { BasicTabViewComponent } from "./basic-tab-view/basic-tab-view.component";
import { TabViewItemsComponent } from "./tab-view-items/tab-view-items.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

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
        path: "items",
        component: TabViewItemsComponent,
        data: { title: "TabView items" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptFormsModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        TabViewExamplesComponent,
        BasicTabViewComponent,
        TabViewItemsComponent
    ]
})

export class TabViewExamplesModule {
    constructor() { }
}
