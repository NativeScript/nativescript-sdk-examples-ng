import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NativeScriptFormsModule } from "@nativescript/angular";
import { TabViewExamplesComponent } from "./tab-view-examples.component";
import { BasicTabViewComponent } from "./usage/usage.component";
import { StylingComponent } from "./styling/styling.component";
import { TipsAndTrciksComponent } from "./tips-and-tricks/tips-and-tricks.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: TabViewExamplesComponent
    },
    {
        path: "usage",
        component: BasicTabViewComponent,
        data: { title: "Usage" }
    },
    {
        path: "styling",
        component: StylingComponent,
        data: { title: "Styling Tab View" }
    },
    {
        path: "tips-and-tricks",
        component: TipsAndTrciksComponent,
        data: { title: "Tips and Tricks" }
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
        TipsAndTrciksComponent
    ]
})

export class TabViewExamplesModule {
    constructor() { }
}
