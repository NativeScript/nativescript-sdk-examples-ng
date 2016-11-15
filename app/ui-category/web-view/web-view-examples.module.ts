import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { WebViewExamplesComponent } from "./web-view-examples.component";
import { BasicWebViewComponent } from "./basic-web-view/basic-web-view.component";
import { WebViewHtmlComponent } from "./web-view-html/web-view-html.component";

export const routerConfig = [
    {
        path: '',
        component: WebViewExamplesComponent
    },
    {
        path: 'basic',
        component: BasicWebViewComponent,
        data: { title: "Basic WebView" }
    },
    {
        path: 'html',
        component: WebViewHtmlComponent,
        data: { title: "HTML as source of WebView" }
    }
];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [WebViewExamplesComponent, BasicWebViewComponent, WebViewHtmlComponent]
})

export class WebViewExamplesModule {
    constructor() { }
}
