// >> using-ngif-platform-code 
import { Component, OnInit } from "@angular/core";
import application = require("application");

@Component({
    selector: 'ngif-for-platform-specific-component',
    templateUrl: "ui/ng-directives/using-ngif-for-platform-specific/using-ngif-for-platform-specific.component.html",
})

export class UsingNgIfForPlatformSpecificComponent implements OnInit {
    public isAndroid: boolean;
    public isIos: boolean;

    ngOnInit() {
        if (application.ios) {
            this.isAndroid = false;
            this.isIos = true;
        } else if (application.android) {
            this.isAndroid = true;
            this.isIos = false;
        }
    }
}
// << using-ngif-platform-code        
