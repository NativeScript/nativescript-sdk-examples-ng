// >> app-check-target-code
import { Component } from "@angular/core";
import { isAndroid, isIos } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./app-checking-target.component.html"
})
export class AppCheckingTargetExampleComponent {
    public isItemVisible: boolean;

    constructor() {
        if (isAndroid) {
            console.log("We are running on Android device!");
            this.isItemVisible = true;
        } else if (isIos) {
            console.log("We are running on iOS device");
            this.isItemVisible = false;
        }
    }
}
// << app-check-target-code
