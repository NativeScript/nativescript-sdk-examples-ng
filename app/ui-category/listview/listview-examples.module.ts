import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ListViewExamplesComponent } from "./listview-examples.component";
import { CreatingListViewComponent } from "./creating-listview/creating-listview.component";
import { CustomizingListViewComponent } from "./customizing-listview/customizing-listview.component";
import { UsingAsyncPipeComponent } from "./using-async-pipe/using-async-pipe.component";
import { UpdateChildComponent, ItemComponent } from "./update-child-component/update-child-component.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ListViewExamplesComponent
    },
    {
        path: "creating-list-view",
        component: CreatingListViewComponent,
        data: { title: "Create ListView" }
    },
    {
        path: "customizing-list-view",
        component: CustomizingListViewComponent,
        data: { title: "Customizing ListView" }
    },
    {
        path: "using-async-pipe",
        component: UsingAsyncPipeComponent,
        data: { title: "Using async pipe" }
    },
    {
        path: "update-child-component",
        component: UpdateChildComponent,
        data: { title: "Update child component" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        ItemComponent,
        ListViewExamplesComponent,
        CreatingListViewComponent,
        CustomizingListViewComponent,
        UsingAsyncPipeComponent,
        UpdateChildComponent
    ]
})

export class ListViewExamplesModule {
    constructor() { }
}
