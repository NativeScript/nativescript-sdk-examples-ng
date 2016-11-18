// >> using-ngif-platform-code 
import { Component, OnInit } from "@angular/core";
import application = require("application");

@Component({
    selector: 'ngif-directive-advanced',
    templateUrl: "ui-category/ng-directives/ngif-directive-advanced/ngif-directive-advanced.component.html",
})

export class NgIfAdvancedComponent implements OnInit {
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
