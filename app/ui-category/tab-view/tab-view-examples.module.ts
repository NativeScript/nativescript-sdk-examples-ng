import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TabViewExamplesComponent } from "./tab-view-examples.component";
import { BasicTabViewComponent } from "./basic-tab-view/basic-tab-view.component";
import { TabViewItemsComponent } from "./tab-view-items/tab-view-items.component";
import { CustomizingTabViewItemsComponent } from "./customizing-tab-view-items/customizing-tab-view-items.component";
import { BindingTabViewItemsComponent } from "./binding-tab-view-items/binding-tab-view-items.component";
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
        path: "items",
        component: TabViewItemsComponent,
        data: { title: "TabView items" }
    },
    {
        path: "customizing",
        component: CustomizingTabViewItemsComponent,
        data: { title: "Customizing Tab View" }
    },
    {
        path: "binding",
        component: BindingTabViewItemsComponent,
        data: { title: "Binding (Two-way) TabView selectedIndex" }
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
        TabViewItemsComponent,
        CustomizingTabViewItemsComponent,
        BindingTabViewItemsComponent
    ]
})

export class TabViewExamplesModule {
    constructor() { }
}
