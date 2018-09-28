// tslint:disable:max-line-length
// >> webview-ts-gestures
import { Component, ViewChild, ElementRef } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";

@Component({
    moduleId: module.id,
    // >> (hide)
    styleUrls: ["./style.css"],
    // << (hide)
    templateUrl: "./web-view-gestures.component.html"
})
export class WebViewGesturesComponent {
    public webViewSrc = "<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>";
    public touchResult = "Touch: x: _ y: _";
    public panResult = "Pan: deltaX: _ deltaY: _";

    public onWebViewLoaded(webargs) {
        const webview = webargs.object;
        if (isAndroid) {
            webview.android.getSettings().setDisplayZoomControls(false);
        }
    }

    public webViewTouch(args) {
        this.touchResult = `Touch: x: ${args.getX().toFixed(3)} y: ${args.getY().toFixed(3)}`;
        console.log(`Touch: x: ${args.getX().toFixed(3)} y: ${args.getY().toFixed(3)}`);
    }

    public webViewPan(args) {
        this.panResult = `Pan: deltaX: ${args.deltaX.toFixed(3)} deltaY: ${args.deltaY.toFixed(3)}`;
        console.log(`Pan: deltaX: ${args.deltaX.toFixed(3)} deltaY: ${args.deltaY.toFixed(3)}`);
    }
}
// << webview-ts-gestures
