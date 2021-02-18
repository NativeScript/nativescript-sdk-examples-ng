// tslint:disable:max-line-length
// >> webview-ts-gestures
import { Component } from "@angular/core";
import { isAndroid } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./tips-and-tricks.component.html"
})
export class TipsAndTricksComponent {
    webViewSrc = "<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>";
    touchResult = "Touch: x: _ y: _";
    panResult = "Pan: deltaX: _ deltaY: _";

    onWebViewLoaded(webargs) {
        const webview = webargs.object;
        if (isAndroid) {
            // Disabled the native zoom control (to enable gestures on Android)
            webview.android.getSettings().setDisplayZoomControls(false);
        }
    }

    webViewTouch(args) {
        this.touchResult = `Touch: x: ${args.getX().toFixed(3)} y: ${args.getY().toFixed(3)}`;
        console.log(`Touch: x: ${args.getX().toFixed(3)} y: ${args.getY().toFixed(3)}`);
    }

    webViewPan(args) {
        this.panResult = `Pan: deltaX: ${args.deltaX.toFixed(3)} deltaY: ${args.deltaY.toFixed(3)}`;
        console.log(`Pan: deltaX: ${args.deltaX.toFixed(3)} deltaY: ${args.deltaY.toFixed(3)}`);
    }
}
// << webview-ts-gestures
