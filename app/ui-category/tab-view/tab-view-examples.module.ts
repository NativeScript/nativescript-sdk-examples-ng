import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { TabViewExamplesComponent } from "./tab-view-examples.component";
import { BasicTabViewComponent } from "./basic-tab-view/basic-tab-view.component";
import { TabViewItemsComponent } from "./tab-view-items/tab-view-items.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: '',
        component: TabViewExamplesComponent
    },
    {
        path: 'basic',
        component: BasicTabViewComponent,
        data: { title: "Basic TabView" }
    },
    {
        path: 'items',
        component: TabViewItemsComponent,
        data: { title: "TabView items" }
    }
];

@NgModule({
    imports: [TitleAndNavButtonModule, NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [TabViewExamplesComponent, BasicTabViewComponent, TabViewItemsComponent]
})

export class TabViewExamplesModule {
    constructor() { }
}
