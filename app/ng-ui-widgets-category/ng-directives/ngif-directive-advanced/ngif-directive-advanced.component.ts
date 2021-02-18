// >> using-ngif-platform-code
import { Component, OnInit } from "@angular/core";
import { isAndroid, isIOS } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./ngif-directive-advanced.component.html",
})
export class NgIfAdvancedComponent implements OnInit {
    public isAndroid: boolean;
    public isIos: boolean;

    ngOnInit() {
        if (isIOS) {
            this.isAndroid = false;
            this.isIos = true;
        } else if (isAndroid) {
            this.isAndroid = true;
            this.isIos = false;
        }
    }
}
// << using-ngif-platform-code
