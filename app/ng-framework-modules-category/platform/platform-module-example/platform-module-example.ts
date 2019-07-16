import { Component } from "@angular/core";
// >> import-platform-module
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
// << import-platform-module
// >> get-screen-device-info
class DeviceInfo {
    constructor(
        public model: string,
        public deviceType: string,
        public os: string,
        public osVersion: string,
        public sdkVersion: string,
        public language: string,
        public manufacturer: string,
        public uuid: string
    ) { }
}

class ScreenInfo {
    constructor(
        public heightDIPs: number,
        public heightPixels: number,
        public scale: number,
        public widthDIPs: number,
        public widthPixels: number
    ) { }
}

@Component({
    moduleId: module.id,
    templateUrl: "./platform-module-example.html"
})
export class PlatformModuleExampleComponent {
    public isItemVisible: boolean = false;
    public deviceInformation: DeviceInfo;
    public isItemVisibleScreenInfo: boolean = false;
    public screenInformation: ScreenInfo;
    public deviceInfoButton: string = "Show device info";
    public screenInfoButton: string = "Show/Hide screen info";

    constructor() {
        this.deviceInformation = new DeviceInfo(
            device.model,
            device.deviceType,
            device.os,
            device.osVersion,
            device.sdkVersion,
            device.language,
            device.manufacturer,
            device.uuid);
        this.screenInformation = new ScreenInfo(
            screen.mainScreen.heightDIPs,
            screen.mainScreen.heightPixels,
            screen.mainScreen.scale,
            screen.mainScreen.widthDIPs,
            screen.mainScreen.widthPixels);
    }

    public checkPlatformType(args) {
        let message = "";
        if (isAndroid) {
            message = "You are using Android device";
        } else if (isIOS) {
            message = "You are using IOS device";
        }
        alert(message);
    }

    public deviceInfo(args) {
        if (this.isItemVisible) {
            this.isItemVisible = false;
            this.deviceInfoButton = "Show device info";
        } else {
            this.isItemVisible = true;
            this.deviceInfoButton = "Hide device info";
        }
    }

    public screenInfo(args) {
        if (this.isItemVisibleScreenInfo) {
            this.isItemVisibleScreenInfo = false;
            this.screenInfoButton = "Show screen info";
        } else {
            this.isItemVisibleScreenInfo = true;
            this.screenInfoButton = "Hide screen info";
        }
    }
}
// << get-screen-device-info
