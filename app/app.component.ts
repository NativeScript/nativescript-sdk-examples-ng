import { Component, AfterViewInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { Application, ApplicationEventData, ApplicationSettings } from "@nativescript/core";
import { DeepLinkData } from "./shared/deep-link-data";
@Component({
    moduleId: module.id,
    selector: "sdk-app",
    template: `<page-router-outlet></page-router-outlet>`
})

export class AppComponent implements AfterViewInit {
    constructor(private router: RouterExtensions) { }

    ngAfterViewInit() {
        Application.on(Application.resumeEvent, (args: ApplicationEventData) => {
            if (args.android) {
                const dld = new DeepLinkData("", args.android);
                this.launchExample();
            } else if (args.ios) {
                this.launchExample();
            }
        });
    }
    public launchExample() {
        if (ApplicationSettings.hasKey("gotoexample")) {
            let value = ApplicationSettings.getString("gotoexample");
            ApplicationSettings.remove("gotoexample");
            this.router.navigate([value]);
        }
    }
}
