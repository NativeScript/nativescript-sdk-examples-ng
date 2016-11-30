import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { WebViewExamplesComponent } from "./web-view-examples.component";
import { BasicWebViewComponent } from "./basic-web-view/basic-web-view.component";
import { WebViewHtmlComponent } from "./web-view-html/web-view-html.component";
import { TitleAndNavButtonModule } from "../../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: WebViewExamplesComponent
    },
    {
        path: "basic",
        component: BasicWebViewComponent,
        data: { title: "Basic WebView" }
    },
    {
        path: "html",
        component: WebViewHtmlComponent,
        data: { title: "HTML as source of WebView" }
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
    declarations: [WebViewExamplesComponent, BasicWebViewComponent, WebViewHtmlComponent]
})

export class WebViewExamplesModule {
    constructor() { }
}
