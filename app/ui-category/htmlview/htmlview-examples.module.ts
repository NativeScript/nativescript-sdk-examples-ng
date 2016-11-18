import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { HtmlViewExamplesComponent } from "./htmlview-examples.component";
import { CreatingHtmlViewExampleComponent } from "./creating-htmlview/creating-htmlview.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: '',
        component: HtmlViewExamplesComponent
    },
    {
        path: 'creating-html-view',
        component: CreatingHtmlViewExampleComponent,
        data: { title: "Create HtmlView" }
    }
];

@NgModule({
    imports: [TitleAndNavButtonModule, NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [HtmlViewExamplesComponent, CreatingHtmlViewExampleComponent]
})

export class HtmlViewExamplesModule {
    constructor() { }
}
