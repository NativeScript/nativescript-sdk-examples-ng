import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { ScrollViewExamplesComponent } from "./scroll-view-examples.component";
import { ScrollViewHorizontalComponent } from "./horizontal/scroll-view-horizontal.component";
import { ScrollViewVerticalComponent } from "./vertical/scroll-view-vertical.component";
import { ScrollEventComponent } from "./scroll-event/scroll-event.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ScrollViewExamplesComponent
    },
    {
        path: "horizontal",
        component: ScrollViewHorizontalComponent,
        data: { title: "Horizontal orientation" }
    },
    {
        path: "vertical",
        component: ScrollViewVerticalComponent,
        data: { title: "Vertical orientation" }
    },
    {
        path: "scroll-event",
        component: ScrollEventComponent,
        data: { title: "Scroll event" }
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
        ScrollViewExamplesComponent,
        ScrollViewHorizontalComponent,
        ScrollViewVerticalComponent,
        ScrollEventComponent
    ]
})

export class ScrollViewExamplesModule {
    constructor() { }
}
