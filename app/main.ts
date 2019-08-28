import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import { ios } from "tns-core-modules/application";
import { isIOS } from "tns-core-modules/platform";
import { MyDelegate } from "./delegate/my-delegate";
import "nativescript-theme-core";

if (isIOS) {
    ios.delegate = MyDelegate;
}
platformNativeScriptDynamic().bootstrapModule(AppModule);
