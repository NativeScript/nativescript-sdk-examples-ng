import { Component } from "@angular/core";
import * as application from "application";
import * as utils from "utils/utils";

@Component({
    styleUrls: ["application/app-using-ios-specifics/app-using-ios-specifics.component.css"],
    selector: 'app-ios-specifics-component',
    templateUrl: 'application/app-using-ios-specifics/app-using-ios-specifics.component.html'
})
export class AppUsingIosExampleComponent {
    public isItemVisible: boolean;
    public batteryLife: string;
    public goodToRemove: boolean = false;

    constructor() {

        if (application.ios) {

            this.isItemVisible = true;
            this.batteryLife = "0";

            // >> app-ios-observer-code
            utils.ios.getter(UIDevice, UIDevice.currentDevice).batteryMonitoringEnabled = true;
            var percent = utils.ios.getter(UIDevice, UIDevice.currentDevice).batteryLevel * 100;
            this.batteryLife = percent.toFixed(2);

            var that = this;
            var observer = application.ios.addNotificationObserver(UIDeviceBatteryLevelDidChangeNotification,
                function onReceiveCallback(notification: NSNotification) {
                    var percent = utils.ios.getter(UIDevice, UIDevice.currentDevice).batteryLevel * 100;
                    that.batteryLife = percent.toFixed(2);

                    var message = "Battery: " + percent + "%";
                    console.log("Updated battery level: " + message);
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