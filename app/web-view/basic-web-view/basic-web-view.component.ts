// >> setting-url-webview
import {Component, OnInit} from "@angular/core";
// >> (hide)
import { COMMON_DIRECTIVES } from '../../directives';
// << (hide)
import {WebView, LoadEventData} from "ui/web-view";
import {Page} from "ui/page";
import {TextField} from "ui/text-field"

@Component({
    selector: 'basic-web-view-component',
    // >> (hide)
    directives: [COMMON_DIRECTIVES],
    // << (hide)
    templateUrl: 'web-view/basic-web-view/basic-web-view.component.html',
    styleUrls:["web-view/basic-web-view/style.css"]
})

export class BasicWebViewComponent implements OnInit {
    
    public url="https://www.google.com";
    public webviewsrc="https://www.google.com";
    
    constructor(private page: Page) {
    }

    ngOnInit() {
        let webview:WebView = this.page.getViewById<WebView>("wv");

        webview.on(WebView.loadFinishedEvent, function (args: LoadEventData) {
            let message;
            if (!args.error) {
                message = "WebView finished loading " + args.url;
            }
            else {
                message = "Error loading " + args.url + ": " + args.error;
            }
            alert("WebView message - " + message);
        });
    }
        
    loadPage(){
        let textField:TextField = this.page.getViewById<TextField>("urlField");

        if(this.url.substring(0, 4) === 'http'){
            this.webviewsrc = this.url;
            textField.dismissSoftInput();
        }else{
            alert("Please, add `http://` or `https://` in front of the URL string");
        }
        
    }

    goBack(){
        let webview:WebView = this.page.getViewById<WebView>("wv");
        if(webview.canGoBack){
            webview.goBack();
        }
    }

    submit(){
        let textField:TextField = this.page.getViewById<TextField>("urlField");

        if(this.url.substring(0, 4) === 'http'){
            this.webviewsrc = this.url;
            textField.dismissSoftInput();
        }else{
            alert("Please, add `http://` or `https://` in front of the URL string");
        }
    }

}
// << setting-url-webview
