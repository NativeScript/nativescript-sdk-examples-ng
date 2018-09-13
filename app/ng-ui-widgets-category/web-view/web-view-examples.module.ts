// tslint:disable:max-line-length
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { WebViewExamplesComponent } from "./web-view-examples.component";
import { BasicWebViewComponent } from "./basic-web-view/basic-web-view.component";
import { WebViewHtmlComponent } from "./web-view-html/web-view-html.component";
import { WebViewGesturesComponent } from "./gestures/web-view-gestures.component";
import { WebViewEventsComponent } from "./events/web-view-events.component";
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
    },
    {
        path: "gestures",
        component: WebViewGesturesComponent,
        data: { title: "WebView - Gestures" }
    },
    {
        path: "events",
        component: WebViewEventsComponent,
        data: { title: "WebView - Events" }
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
    declarations: [WebViewExamplesComponent, BasicWebViewComponent, WebViewHtmlComponent, WebViewGesturesComponent, WebViewEventsComponent]
})

export class WebViewExamplesModule { }

