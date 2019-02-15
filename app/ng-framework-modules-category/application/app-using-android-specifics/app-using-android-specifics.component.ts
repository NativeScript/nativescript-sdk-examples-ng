import { Component } from "@angular/core";
import { android as androidApp, ios as iosApp } from "tns-core-modules/application";

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

            // >> app-class-properties
            let isPaused = androidApp.paused; // e.g. false
            let packageName = androidApp.packageName; // The package ID e.g. org.nativescript.nativescriptsdkexamplesng
            let nativeApp = androidApp.nativeApp; // The native APplication reference
            let foregroundActivity = androidApp.foregroundActivity; // The current Activity reference
            let currentContext = androidApp.currentContext; // The current Android context
            let context = androidApp.context; console.log(context); // The current Android context
            // << app-class-properties

            // >> app-android-dirs-code
            this.fileList = [];
            this.appContext = androidApp.context;

            // https://developer.android.com/reference/android/content/Context.html#getFilesDir()
            this.filesDir = this.appContext.getFilesDir();

            // https://developer.android.com/reference/android/content/Context.html#getCacheDir()
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

            // Broadcast Receiver https://developer.android.com/reference/android/content/BroadcastReceiver
            androidApp.registerBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED,
                function onReceiveCallback(androidContext: android.content.Context, intent: android.content.Intent) {
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

    unregister() {
        // >> app-android-broadcast-unregister-code
        androidApp.unregisterBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED);
        // << app-android-broadcast-unregister-code
    }
}

class File {
    constructor(public name: string) { }
}
