// tslint:disable:max-line-length
// >> web-view-src-local-file
import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    // >> (hide)
    styleUrls: ["./style.css"],
    // << (hide)
    templateUrl: "./web-view-html.component.html",
})
export class WebViewHtmlComponent {
    public firstWebViewSRC = '<!DOCTYPE html><html><head><title>MyTitle</title><meta charset="utf-8" /></head><body><span style="color:#0099CC; text-align: center;">First WebView</span></body></html>';
    public secondWebViewSRC = "~/ui-category/web-view/web-view-html/test.html";
}
// << web-view-src-local-file
