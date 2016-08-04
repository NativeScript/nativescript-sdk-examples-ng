import {Component} from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';

@Component({
    selector: 'web-view-html-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'web-view/web-view-html/web-view-html.component.html',
})

export class WebViewHtmlComponent {
    // >> web-view-src-local-file
    public firstWebViewSRC = '<!DOCTYPE html><html><head><title>MyTitle</title><meta charset="utf-8" /></head><body><span style="color:red; text-align: center;">First WebView</span></body></html>';

    public secondWebViewSRC = "~/web-view/web-view-html/test.html";
    // << web-view-src-local-file
}