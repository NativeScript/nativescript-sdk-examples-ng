import { Component } from "@angular/core";
// >> import-platform-module
import {isAndroid, isIOS, device, screen} from "platform"
// << import-platform-module
// >> get-screen-device-info
class DeviceInfo{
    constructor(
                public model:string, 
                public deviceType:string, 
                public os:string, 
                public osVersion:string, 
                public sdkVersion:string, 
                public language:string, 
                public manufacturer:string, 
                public uuid:string
                ){}
}

class ScreenInfo{
    constructor(
                public heightDIPs:number,
                public heightPixels:number,
                public scale:number,
                public widthDIPs:number,
                public widthPixels:number
               ){}
}

@Component({
    selector: 'platform-module-component',
    styleUrls:['platform/platform-module-example/style.css'],
    templateUrl: 'platform/platform-module-example/platform-module-example.html'
})

export class PlatformModuleExampleComponent {
    public isItemVisible:boolean = false;
    public deviceInformation:DeviceInfo;
    public isItemVisibleScreenInfo:boolean = false;
    public screenInformation:ScreenInfo;

    constructor(){
        this.deviceInformation = new DeviceInfo(
            device.model, 
            device.model, 
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

    public checkPlatformType(){
        var message = "";
        if(isAndroid){
            message = "You are using Android device";
        }
        if(isIOS){
            message = "You are using IOS device";
        }
        alert(message);
    }

    public deviceInfo(){
        if(this.isItemVisible){
            this.isItemVisible=false;
        }
        else{
            this.isItemVisible=true;
        }
    }

    public screenInfo(){
        if(this.isItemVisibleScreenInfo){
            this.isItemVisibleScreenInfo=false;
        }
        else{
            this.isItemVisibleScreenInfo=true;
        }
    }
}
// << get-screen-device-info
