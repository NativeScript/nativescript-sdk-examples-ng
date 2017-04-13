// >> setting-url-webview
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { WebView, LoadEventData } from "ui/web-view";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { Label } from "ui/label";

@Component({
    moduleId: module.id,
    templateUrl: "./basic-web-view.component.html",
    styleUrls: ["./style.css"]
})
export class BasicWebViewComponent implements AfterViewInit {
    public webViewSrc: string = "https://www.nativescript.org/";

    @ViewChild("myWebView") webViewRef: ElementRef;
    @ViewChild("urlField") urlFieldRef: ElementRef;
    @ViewChild("labelResult") labelResultRef: ElementRef;

    ngAfterViewInit() {
        let webview: WebView = this.webViewRef.nativeElement;
        let label: Label = this.labelResultRef.nativeElement;
        label.text = "WebView is still loading...";

        webview.on(WebView.loadFinishedEvent, function (args: LoadEventData) {
            let message;
            if (!args.error) {
                message = "WebView finished loading of " + args.url;
            } else {
                message = "Error loading " + args.url + ": " + args.error;
            }

            label.text = message;
            console.log("WebView message - " + message);
        });
    }

    goBack() {
        let webview: WebView = this.webViewRef.nativeElement;
        if (webview.canGoBack) {
            webview.goBack();
        }
    }

    submit(args: string) {
        let textField: TextField = this.urlFieldRef.nativeElement;

        if (args.substring(0, 4) === "http") {
            this.webViewSrc = args;
            textField.dismissSoftInput();
        } else {
            alert("Please, add `http://` or `https://` in front of the URL string");
        }
    }
}
// << setting-url-webview
