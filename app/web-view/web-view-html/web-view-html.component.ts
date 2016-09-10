// >> web-view-src-local-file
import {Component} from "@angular/core";

@Component({
    selector: 'web-view-html-component',
    // >> (hide)
    styleUrls: ["web-view/style.css"],
    // << (hide)
    templateUrl: 'web-view/web-view-html/web-view-html.component.html',
})

export class WebViewHtmlComponent {
    
    public firstWebViewSRC = '<!DOCTYPE html><html><head><title>MyTitle</title><meta charset="utf-8" /></head><body><span style="color:#0099CC; text-align: center;">First WebView</span></body></html>';

    public secondWebViewSRC = "~/web-view/web-view-html/test.html";
    
}
// << web-view-src-local-file
