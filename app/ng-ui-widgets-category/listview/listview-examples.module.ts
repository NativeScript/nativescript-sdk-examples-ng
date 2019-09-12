import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ListViewExamplesComponent } from "./listview-examples.component";
import { ListViewUsageComponent } from "./usage/usage.component";
import { ListViewTipsComponent, SdkChildComponent } from "./tips-and-tricks/tips-and-tricks.component";
import { ListViewStylingComponent } from "./styling/styling.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ListViewExamplesComponent
    },
    {
        path: "usage",
        component: ListViewUsageComponent,
        data: { title: "Usage" }
    },
    {
        path: "styling",
        component: ListViewStylingComponent,
        data: { title: "Styling" }
    },
    {
        path: "tips",
        component: ListViewTipsComponent,
        data: { title: "Tips and Tricks" }
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
        ListViewExamplesComponent,
        ListViewUsageComponent,
        ListViewStylingComponent,
        ListViewTipsComponent,
        SdkChildComponent
    ]
})

export class ListViewExamplesModule {
    constructor() { }
}
