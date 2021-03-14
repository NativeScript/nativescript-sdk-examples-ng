// tslint:disable:max-line-length
// >> import-platform-module
import { Component } from "@angular/core";
import { isAndroid, isIOS, Device, Screen } from "@nativescript/core";

@Component({
    moduleId: module.id,
    templateUrl: "./platform-module-example.html"
})
export class PlatformModuleExampleComponent {

    constructor() {
        console.log(`Running on Android? ${isAndroid}`);
        console.log(`Running on iOS? ${isIOS}`);

        console.log(`device.model ${Device.model}`); // For example: "Nexus 5" or "iPhone".
        console.log(`device.deviceType ${Device.deviceType}`); // "Phone" | "Tablet"
        console.log(`device.os ${Device.os}`); // For example: "Android" or "iOS".
        console.log(`device.osVersion ${Device.osVersion}`); // For example: 4.4.4(android), 8.1(ios)
        console.log(`device.sdkVersion ${Device.sdkVersion}`); //  For example: 19(android), 8.1(ios).
        console.log(`device.language ${Device.language}`); // For example "en" or "en-US".
        console.log(`device.manufacturer ${Device.manufacturer}`); // For example: "Apple" or "HTC" or "Samsung".
        console.log(`device.uuid ${Device.uuid}`); // The unique identification number
        console.log(`device.region ${Device.region}`); //  For example "US".

        console.log(`screen.mainScreen.heightDIPs ${Screen.mainScreen.heightDIPs}`); // The absolute height of the screen in density independent pixels.
        console.log(`screen.mainScreen.heightPixels ${Screen.mainScreen.heightPixels}`); // The absolute height of the screen in pixels.
        console.log(`screen.mainScreen.scale ${Screen.mainScreen.scale}`); // The logical density of the display.
        console.log(`screen.mainScreen.widthDIPs ${Screen.mainScreen.widthDIPs}`); // The absolute width of the screen in density independent pixels.
        console.log(`screen.mainScreen.widthPixels ${Screen.mainScreen.widthPixels}`); // The absolute width of the screen in pixel
    }
}
// << import-platform-module
