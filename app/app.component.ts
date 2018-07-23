import { Component, AfterViewInit } from "@angular/core";
import { hasKey, getString, remove } from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import * as app from "application";
import { DeepLinkData } from "./shared/deep-link-data";
@Component({
    moduleId: module.id,
    selector: "sdk-app",
    template: `
        <page-router-outlet></page-router-outlet>
    `
})

export class AppComponent implements AfterViewInit {
    constructor(private router: RouterExtensions) { }

    ngAfterViewInit() {
        app.on(app.resumeEvent, (args: app.ApplicationEventData) => {
            if (args.android) {
                const dld = new DeepLinkData("", args.android);
                this.launchExample();
            } else if (args.ios) {
                this.launchExample();
            }
        });
    }
    public launchExample() {
        if (hasKey("gotoexample")) {
            let value = getString("gotoexample");
            remove("gotoexample");
            this.router.navigate([value]);
        }
    }
}
