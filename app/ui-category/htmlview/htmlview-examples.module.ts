import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { HtmlViewExamplesComponent } from "./htmlview-examples.component";
import { CreatingHtmlViewExampleComponent } from "./creating-htmlview/creating-htmlview.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: HtmlViewExamplesComponent
    },
    {
        path: "creating-html-view",
        component: CreatingHtmlViewExampleComponent,
        data: { title: "Create HtmlView" }
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
    declarations: [HtmlViewExamplesComponent, CreatingHtmlViewExampleComponent]
})

export class HtmlViewExamplesModule {
    constructor() { }
}
