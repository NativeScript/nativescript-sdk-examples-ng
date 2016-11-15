import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { SegmentedBarExamplesComponent } from "./segmented-bar-examples.component";
import { BasicSegmentedBarComponent } from "./basic-segmented-bar/basic-segmented-bar.component";
import { SegmentedBarViewsComponent } from "./segmented-bar-views/segmented-bar-views.component";

export const routerConfig = [
    {
        path: '',
        component: SegmentedBarExamplesComponent
    },
    {
        path: 'basic',
        component: BasicSegmentedBarComponent,
        data: { title: "Basic SegmentedBar" }
    },
    {
        path: 'views',
        component: SegmentedBarViewsComponent,
        data: { title: "SegmentedBar views" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [SegmentedBarExamplesComponent, BasicSegmentedBarComponent, SegmentedBarViewsComponent]
})

export class SegmentedBarExamplesModule {
    constructor() { }
}
