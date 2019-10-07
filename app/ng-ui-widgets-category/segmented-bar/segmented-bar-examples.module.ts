import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SegmentedBarExamplesComponent } from "./segmented-bar-examples.component";
import { BasicSegmentedBarComponent } from "./usage/usage.component";
import { SegmentedBarViewsComponent } from "./styling/styling.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: SegmentedBarExamplesComponent
    },
    {
        path: "usage",
        component: BasicSegmentedBarComponent,
        data: { title: "Usage" }
    },
    {
        path: "styling",
        component: SegmentedBarViewsComponent,
        data: { title: "Styling" }
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
    declarations: [SegmentedBarExamplesComponent, BasicSegmentedBarComponent, SegmentedBarViewsComponent]
})

export class SegmentedBarExamplesModule {
    constructor() { }
}
