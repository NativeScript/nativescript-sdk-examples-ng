import { Component, ChangeDetectionStrategy, Input }  from "@angular/core";
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';
import { COMMON_DIRECTIVES } from './../directives';
import { Link } from "./../link";

var menuLinks = [
    new Link("WebView Code", "/basicWebViewComponent"),
    new Link("WebView HTML", "/webViewHtmlComponent")
];
     
@Component({
    selector: 'web-view-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'web-view/web-view-examples.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class WebViewExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}