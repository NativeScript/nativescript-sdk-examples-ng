import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import { ios } from "application";
import { isIOS } from "platform";
let delegateModule;
if (isIOS) {
    delegateModule = require("./delegate/my-delegate");
    ios.delegate = delegateModule.MyDelegate;
}
platformNativeScriptDynamic().bootstrapModule(AppModule);
