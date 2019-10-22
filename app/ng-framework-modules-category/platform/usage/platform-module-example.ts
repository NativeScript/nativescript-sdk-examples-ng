// tslint:disable:max-line-length
// >> import-platform-module
import { Component } from "@angular/core";
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";

@Component({
    moduleId: module.id,
    templateUrl: "./platform-module-example.html"
})
export class PlatformModuleExampleComponent {

    constructor() {
        console.log(`Running on Android? ${isAndroid}`);
        console.log(`Running on iOS? ${isIOS}`);

        console.log(`device.model ${device.model}`); // For example: "Nexus 5" or "iPhone".
        console.log(`device.deviceType ${device.deviceType}`); // "Phone" | "Tablet"
        console.log(`device.os ${device.os}`); // For example: "Android" or "iOS".
        console.log(`device.osVersion ${device.osVersion}`); // For example: 4.4.4(android), 8.1(ios)
        console.log(`device.sdkVersion ${device.sdkVersion}`); //  For example: 19(android), 8.1(ios).
        console.log(`device.language ${device.language}`); // For example "en" or "en-US".
        console.log(`device.manufacturer ${device.manufacturer}`); // For example: "Apple" or "HTC" or "Samsung".
        console.log(`device.uuid ${device.uuid}`); // The unique identification number
        console.log(`device.region ${device.region}`); //  For example "US".

        console.log(`screen.mainScreen.heightDIPs ${screen.mainScreen.heightDIPs}`); // The absolute height of the screen in density independent pixels.
        console.log(`screen.mainScreen.heightPixels ${screen.mainScreen.heightPixels}`); // The absolute height of the screen in pixels.
        console.log(`screen.mainScreen.scale ${screen.mainScreen.scale}`); // The logical density of the display.
        console.log(`screen.mainScreen.widthDIPs ${screen.mainScreen.widthDIPs}`); // The absolute width of the screen in density independent pixels.
        console.log(`screen.mainScreen.widthPixels ${screen.mainScreen.widthPixels}`); // The absolute width of the screen in pixel
    }
}
// << import-platform-module
