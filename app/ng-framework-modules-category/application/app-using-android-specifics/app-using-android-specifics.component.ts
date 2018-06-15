import { Component } from "@angular/core";
import { android as androidApp, ios as iosApp } from "application";

@Component({
    moduleId: module.id,
    templateUrl: "./app-using-android-specifics.component.html"
})
export class AppUsingAndroidExampleComponent {

    private appContext: any;

    public isItemVisible: boolean;
    public filesDir: string;
    public cacheDir: string;
    public fileList: Array<string>;
    public batteryLife: string;

    constructor() {
        if (androidApp) {
            console.log("We are running on Android device!");
            this.isItemVisible = true;

            // >> app-android-dirs-code
            this.fileList = [];
            this.appContext = androidApp.context;
            this.filesDir = this.appContext.getFilesDir();
            this.cacheDir = this.appContext.getCacheDir();

            let files = this.appContext.fileList();
            for (let index = 0; index < files.length; index++) {
                let element = files[index];
                this.fileList.push(element.toString());
            }
            // << app-android-dirs-code

            // >> app-android-broadcast-code
            this.batteryLife = "0";
            let that = this;

            androidApp.registerBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED,
                function onReceiveCallback(context: android.content.Context, intent: android.content.Intent) {
                    let level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
                    let scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
                    let percent = (level / scale) * 100.0;

                    that.batteryLife = percent.toString();
                });
            // << app-android-broadcast-code
        } else if (iosApp) {
            console.log("We are running on iOS device");
            this.isItemVisible = false;
        }
    }
}

class File {
    constructor(public name: string) { }
}
