import { Component } from "@angular/core";
import { Application, isAndroid, isIOS } from "@nativescript/core";

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
        if (isAndroid) {
            console.log("We are running on Android device!");
            this.isItemVisible = true;

            // >> app-class-properties
            // import { Application } from "@nativescript/core";
            let isPaused = Application.android.paused; // e.g. false
            let packageName = Application.android.packageName; // The package ID e.g. org.nativescript.nativescriptsdkexamplesng
            let nativeApp = Application.android.nativeApp; // The native Application reference
            let foregroundActivity = Application.android.foregroundActivity; // The current Activity reference
            let context = Application.android.context; console.log(context); // The current Android context
            // << app-class-properties

            // >> app-android-dirs-code
            this.fileList = [];
            this.appContext = Application.android.context;

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
            Application.android.registerBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED,
                function onReceiveCallback(androidContext: android.content.Context, intent: android.content.Intent) {
                    let level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
                    let scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
                    let percent = (level / scale) * 100.0;

                    that.batteryLife = percent.toString();
                });
            // << app-android-broadcast-code
        } else if (isIOS) {
            console.log("We are running on iOS device");
            this.isItemVisible = false;
        }
    }

    unregister() {
        // >> app-android-broadcast-unregister-code
        Application.android.unregisterBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED);
        // << app-android-broadcast-unregister-code
    }
}

class File {
    constructor(public name: string) { }
}
