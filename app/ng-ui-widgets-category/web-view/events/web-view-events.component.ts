// tslint:disable:max-line-length
// >> webview-ts-events
import { Component, ViewChild, ElementRef } from "@angular/core";
import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";

@Component({
    moduleId: module.id,
    // >> (hide)
    styleUrls: ["./style.css"],
    // << (hide)
    templateUrl: "./web-view-events.component.html"
})
export class WebViewEventsComponent {
    public webViewSrc = 'https://www.nativescript.org/';
    public isItemVisible = true;

    @ViewChild("webview") webViewElement: ElementRef;
    private firstUrl = 'https://google.com/';
    private secondUrl = 'https://www.nativescript.org/'

    public onLoadStarted(args: LoadEventData){
        this.isItemVisible = true;
        let message;
        if(!args.error){
            // >> (hide)
            console.log("--------------------------------------");
            console.log("Load Start");
            console.log(`EventName: ${args.eventName}`);
            console.log(`NavigationType: ${args.navigationType}`);
            console.log(`Url: ${args.url}`);
            console.log("--------------------------------------");
            // << (hide)
            message = "WebView started loading of " + args.url;
        } else{
            // >> (hide)
            console.log("--------------------------------------");
            console.log(`EventName: ${args.eventName}`);
            console.log(`Error: ${args.error}`);
            console.log("--------------------------------------");
            // << (hide)
            message = "Error loading " + args.url + ": " + args.error;
        }
        console.log(message);
        
    }
    public onLoadFinished(args: LoadEventData){
        let message;
        if(!args.error){
            // >> (hide)
            console.log("--------------------------------------");
            console.log("Load Finished");
            console.log(`EventName: ${args.eventName}`);
            console.log(`NavigationType: ${args.navigationType}`);
            console.log(`Url: ${args.url}`);
            console.log("--------------------------------------");
            // << (hide)
            message = "WebView finished loading of " + args.url;
        } else{
            // >> (hide)
            console.log("--------------------------------------");
            console.log(`EventName: ${args.eventName}`);
            console.log(`Error: ${args.error}`);
            console.log("--------------------------------------");
            // << (hide)
            message = "Error loading " + args.url + ": " + args.error;
        }
        console.log(message);
        // >> (hide)
        setTimeout(() => {
            this.isItemVisible = false
        }, 500);
        // << (hide)
    }

    public loadFirst() {
        this.webViewSrc = this.firstUrl;
    }

    public loadSecond() {
        this.webViewSrc = this.secondUrl;
    }

    public onReload(){
        const webview:WebView = <WebView>this.webViewElement.nativeElement;
        webview.reload();
    }

}
// << webview-ts-events
