// >> setting-url-webview
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";
import { TextField } from "tns-core-modules/ui/text-field";
import { Label } from "tns-core-modules/ui/label";

@Component({
    moduleId: module.id,
    templateUrl: "./basic-web-view.component.html",
    styleUrls: ["./style.css"]
})
export class BasicWebViewComponent implements AfterViewInit {
    public webViewSrc: string = "https://docs.nativescript.org/";
    public enabled: boolean = false;
    @ViewChild("myWebView", { read: ElementRef, static: false }) webViewRef: ElementRef;
    @ViewChild("urlField", { read: ElementRef, static: false }) urlFieldRef: ElementRef;
    @ViewChild("labelResult", { read: ElementRef, static: false }) labelResultRef: ElementRef;

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
            this.enabled = true;
        }
    }
    goForward() {
        let webview: WebView = this.webViewRef.nativeElement;
        if (webview.canGoForward) {
            webview.goForward();
        } else {
            this.enabled = false;
        }
    }
    submit(args: string) {
        let textField: TextField = this.urlFieldRef.nativeElement;
        this.enabled = false;
        if (args.substring(0, 4) === "http") {
            this.webViewSrc = args;
            textField.dismissSoftInput();
        } else {
            alert("Please, add `http://` or `https://` in front of the URL string");
        }
    }
}
// << setting-url-webview
