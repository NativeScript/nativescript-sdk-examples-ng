import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import { ios } from "application";
import { isIOS } from "platform";
import { MyDelegate } from "./delegate/my-delegate";
if (isIOS) {
    ios.delegate = MyDelegate;
}
platformNativeScriptDynamic().bootstrapModule(AppModule);
