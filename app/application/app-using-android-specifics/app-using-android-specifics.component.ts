
import { Component } from "@angular/core";
import * as application from "application";

@Component({
    styleUrls:["application/app-using-android-specifics/app-using-android-specifics.component.css"],
    selector: 'app-android-specifics-component',
    templateUrl: 'application/app-using-android-specifics/app-using-android-specifics.component.html'
})

export class AppUsingAndroidExampleComponent {      

    private appContext: any;

    public isItemVisible: boolean;
    public filesDir: string;
    public cacheDir: string;
    public fileList: Array<string>;
    public batteryLife: string;

    constructor() {
        if(application.android) {
            console.log("We are running on Android device!");
            this.isItemVisible = true;

            // >> app-android-dirs-code
            this.fileList = [];
            this.appContext = application.android.context;
            this.filesDir = this.appContext.getFilesDir();
            this.cacheDir = this.appContext.getCacheDir();

            var files = this.appContext.fileList();
            for (var index = 0; index < files.length; index++) {
                var element = files[index];
                this.fileList.push(element.toString());
            }
            // << app-android-dirs-code

            // >> app-android-broadcast-code
            this.batteryLife = "0";
            var that = this;

            application.android.registerBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED,
                function onReceiveCallback(context: android.content.Context, intent: android.content.Intent) {
                    var level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
                    var scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
                    var percent = (level / scale) * 100.0;
                    
                    that.batteryLife = percent.toString();
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
