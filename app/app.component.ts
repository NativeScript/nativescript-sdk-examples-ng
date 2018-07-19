import { Component } from "@angular/core";
import {hasKey, getString, remove} from "application-settings";
import {RouterExtensions} from "nativescript-angular/router";
import * as app from "application"
@Component({
    moduleId: module.id,
    selector: "sdk-app",
    template: `
        <page-router-outlet></page-router-outlet>
    `
})

export class AppComponent {
    constructor(private router:RouterExtensions){}

    ngAfterViewInit(){
        app.on(app.launchEvent, (args: app.ApplicationEventData) => {
            if (args.ios) {
                // For iOS applications, args.ios is UIApplication.
                this.launchExample();
            }
        })
        app.on(app.resumeEvent, (args: app.ApplicationEventData) => {
            if (args.android) {
                // For Android applications, args.android is an android activity class.
                console.log("Activity: " + args.android);
                var intent = args.android.getIntent();
                console.log("Intent Data: ");
                console.log(intent);
                let value = intent.getStringExtra("gotoexample");
                if(value){
                    console.log(intent.getStringExtra("gotoexample"));
                }
                
            } else if (args.ios) {
                // For iOS applications, args.ios is UIApplication.
                this.launchExample();
            }
        })
    }
    public launchExample(){
        if(hasKey("gotoexample")){
            let value = getString("gotoexample");
            console.log("Result: "+value);
            remove("gotoexample");
            this.router.navigate([value]);
        }
    }
}
