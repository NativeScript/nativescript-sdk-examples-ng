import {Component, ViewChild, ElementRef} from "@angular/core";
import { EventData } from "data/observable";
import { COMMON_DIRECTIVES } from '../../directives';
import { StackLayout } from "ui/layouts/stack-layout";
import { Label } from "ui/label";

@Component({
    selector: 'web-view-html-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'web-view/web-view-html/web-view-html.component.html',
})

export class WebViewHtmlComponent {
    public firstWebViewSRC = '<!DOCTYPE html><html><head><title>MyTitle</title><meta charset="utf-8" /></head><body><span style="color:red; text-align: center;">First WebView</span></body></html>';


    public secondWebViewSRC = "~/web-view/web-view-html/test.html";

}