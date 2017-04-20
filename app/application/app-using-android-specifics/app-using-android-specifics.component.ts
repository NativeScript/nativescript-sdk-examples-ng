import { Component } from "@angular/core";
import * as application from "application";

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
    public batteryLife: number;

    constructor() {
        if (application.android) {
            console.log("We are running on Android device!");
            this.isItemVisible = true;

            // >> app-android-dirs-code
            this.fileList = [];
            this.appContext = application.android.context;
            this.filesDir = this.appContext.getFilesDir();
            this.cacheDir = this.appContext.getCacheDir();

            let files = this.appContext.fileList();
            for (let index = 0; index < files.length; index++) {
                let element = files[index];
                this.fileList.push(element.toString());
            }
            // << app-android-dirs-code

            // >> app-android-broadcast-code

            application.android.registerBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED,
                (context: android.content.Context, intent: android.content.Intent) => {
                    const level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
                    const scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
                    this.batteryLife = (level / scale) * 100.0;
                });
            // << app-android-broadcast-code
        } else if (application.ios) {
            console.log("We are running on iOS device");
            this.isItemVisible = false;
        }
    }
}

class File {
    constructor(public name: string) { }
}
