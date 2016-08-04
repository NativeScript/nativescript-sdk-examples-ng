import {Component, OnInit} from "@angular/core";
import { COMMON_DIRECTIVES } from '../../directives';
import {WebView, LoadEventData} from "ui/web-view";
import {Page} from "ui/page";
import {TextField} from "ui/text-field"

@Component({
    selector: 'basic-web-view-component',
    directives: [COMMON_DIRECTIVES],
    templateUrl: 'web-view/basic-web-view/basic-web-view.component.html'
})

export class BasicWebViewComponent implements OnInit {
    // >> setting-url-webview
    public url="https://www.nativescript.org";
    public webviewsrc="https://www.nativescript.org";
    
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
            alert("WeView message: "+message);
        });
    }
        
    loadPage(){
        let textField:TextField = this.page.getViewById<TextField>("urlField");
        this.webviewsrc = "https://"+this.url;
        textField.dismissSoftInput();
    }

    goBack(){
        let webview:WebView = this.page.getViewById<WebView>("wv");
        if(webview.canGoBack){
            webview.goBack();
        }
    }

    submit(){
        this.webviewsrc = "https://"+this.url;
    }
    
    // << setting-url-webview

}