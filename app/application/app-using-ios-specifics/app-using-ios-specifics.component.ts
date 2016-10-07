import { Component } from "@angular/core";
import * as application from "application";
import * as utils from "utils/utils";

@Component({
    styleUrls:["application/app-using-ios-specifics/app-using-ios-specifics.component.css"],
    selector: 'app-ios-specifics-component',
    templateUrl: 'application/app-using-ios-specifics/app-using-ios-specifics.component.html'
})
export class AppUsingIosExampleComponent {      
    private appContext: any;
    
    public isItemVisible: boolean;
    public batteryLife: string;

    constructor() {
        if(application.ios) {

            this.isItemVisible = true;

            var that = this;

            utils.ios.getter(UIDevice, UIDevice.currentDevice).batteryMonitoringEnabled = true;
            
            var observer = application.ios.addNotificationObserver(UIDeviceBatteryLevelDidChangeNotification,
                function onReceiveCallback(notification: NSNotification) {
                    var percent = utils.ios.getter(UIDevice, UIDevice.currentDevice).batteryLevel * 100;
                    var message = "Battery: " + percent + "%";
                    console.log("messgage: " + message);
                    that.batteryLife = message;
                });


        } else if (application.android) {

            this.isItemVisible = false;
        }
    }
}