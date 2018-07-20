import { Component } from "@angular/core";
import {hasKey, getString, remove, setString} from "application-settings";
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
                this.launchExample();
            }
        })
        app.on(app.resumeEvent, (args: app.ApplicationEventData) => {
            if (args.android) {
                var intent = args.android.getIntent();
                let value = intent.getData();
                if(value){
                    this.getParams(value);
                    this.launchExample();
                }
                
            } else if (args.ios) {
                this.launchExample();
            }
        })
    }

    private getParams(url){
                var resulturl:string = url.toString();
                if(resulturl.substring(0,10)=="examplesgo"){
                    let value = this.getParameterByName("gotoexample", resulturl);
                    if(value){
                        console.log(value);
                        setString("gotoexample", value);
                    }
                }
            
    }
    private getParameterByName(name, url) {
                name = name.replace(/[\[\]]/g, "\\$&");
                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return results[2].replace(/\+/g, " ");
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
