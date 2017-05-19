// >> app-check-target-code
import { Component } from "@angular/core";
import { android as androidApp, ios as iosApp } from "application";

@Component({
    moduleId: module.id,
    templateUrl: "./app-checking-target.component.html"
})
export class AppCheckingTargetExampleComponent {
    public isItemVisible: boolean;

    constructor() {
        if (androidApp) {
            console.log("We are running on Android device!");
            this.isItemVisible = true;
        } else if (iosApp) {
            console.log("We are running on iOS device");
            this.isItemVisible = false;
        }
    }

}
// << app-check-target-code
