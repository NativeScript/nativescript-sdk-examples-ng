import { Component } from "@angular/core";
import { isAndroid, isIOS } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./app-using-ios-specifics.component.html"
})
export class AppUsingIosExampleComponent {

    public isItemVisible: boolean;
    public batteryLife: number;
    public goodToRemove: boolean = false;

    constructor() {

        if (isIOS) {
            // >> app-class-properties-ios
            // import { Application } from "@nativescript/core";

            // https://developer.apple.com/documentation/uikit/uiapplicationdelegate?language=objc
            let delegate = Application.ios.delegate; // the iOS application delegate

            let nativeApp = Application.ios.nativeApp; // The native iOS app

            // https://developer.apple.com/documentation/uikit/uiwindow/1621581-rootviewcontroller?language=objc
            let rootController = Application.ios.rootController; // the iOS rootViewController

            let window = Application.ios.window; // UIWindow
            // << app-class-properties-ios

            this.isItemVisible = true;
            this.batteryLife = 0;

            // >> app-ios-observer-code
            UIDevice.currentDevice.batteryMonitoringEnabled = true;
            this.batteryLife = +(UIDevice.currentDevice.batteryLevel * 100);

            let that = this;
            let observer = Application.ios.addNotificationObserver(UIDeviceBatteryLevelDidChangeNotification,
                function onReceiveCallback(notification: NSNotification) {
                    that.batteryLife = +(UIDevice.currentDevice.batteryLevel * 100);
                });
            // << app-ios-observer-code

            if (this.goodToRemove) {
                // >> app-ios-observer-remove-code
                // When no longer needed, remove the notification observer
                Application.ios.removeNotificationObserver(observer, UIDeviceBatteryLevelDidChangeNotification);
                // << app-ios-observer-remove-code
            }
        } else if (isAndroid) {
            this.isItemVisible = false;
        }
    }
}
