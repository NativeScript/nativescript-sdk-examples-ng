import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import { Application } from "@nativescript/core";
import { isIOS } from "@nativescript/core";
import { MyDelegate } from "./delegate/my-delegate";

if (isIOS) {
    Application.ios.delegate = MyDelegate;
}
platformNativeScriptDynamic().bootstrapModule(AppModule);
