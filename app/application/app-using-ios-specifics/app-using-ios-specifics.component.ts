import { Component } from "@angular/core";
import * as application from "application";
import * as utils from "utils/utils";

@Component({
    moduleId: module.id,
    templateUrl: "./app-using-ios-specifics.component.html"
})
export class AppUsingIosExampleComponent {
    public isItemVisible: boolean;
    public batteryLife: number;
    public goodToRemove: boolean = false;

    constructor() {

        if (application.ios) {

            this.isItemVisible = true;
            this.batteryLife = 0;

            // >> app-ios-observer-code
            utils.ios.getter(UIDevice, UIDevice.currentDevice).batteryMonitoringEnabled = true;
            this.batteryLife = +(utils.ios.getter(UIDevice, UIDevice.currentDevice).batteryLevel * 100);

            let that = this;
            let observer = application.ios.addNotificationObserver(UIDeviceBatteryLevelDidChangeNotification,
                function onReceiveCallback(notification: NSNotification) {
                    that.batteryLife = +(utils.ios.getter(UIDevice, UIDevice.currentDevice).batteryLevel * 100);
                });
            // << app-ios-observer-code

            if (this.goodToRemove) {
                // >> app-ios-observer-remove-code
                // When no longer needed, remove the notification observer
                application.ios.removeNotificationObserver(observer, UIDeviceBatteryLevelDidChangeNotification);
                // << app-ios-observer-remove-code
            }
        } else if (application.android) {
            this.isItemVisible = false;
        }
    }
}
