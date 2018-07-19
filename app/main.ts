import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import { ios } from "application";
import { setString, getString} from "application-settings"
// class MyDelegate extends UIResponder implements UIApplicationDelegate {
//     public static ObjCProtocols = [UIApplicationDelegate];

//     private getParams(url){
//         console.log(url);
//         var resulturl:string = (<any>NSString)(url).toString();;
//         if(resulturl.substring(0,10)=="examplesgo"){
//             let value = this.getParameterByName("gotoexample", resulturl);
//             if(value){
//                 console.log(value);
//                 setString("gotoexample", value);
//                 console.log("Test result: "+getString("gotoexample"));
//             }
//         }
    
//     }
//     private getParameterByName(name, url) {
//         name = name.replace(/[\[\]]/g, "\\$&");
//         var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//             results = regex.exec(url);
//         if (!results) return null;
//         if (!results[2]) return '';
//         return results[2].replace(/\+/g, " ");
//     }
//     applicationHandleOpenURL(application: UIApplication, url: NSURL): boolean {
//         console.log("applicationHandleOpenURL")
//         this.getParams(url);
//         return true;
//     }
// }
// ios.delegate = MyDelegate;
platformNativeScriptDynamic().bootstrapModule(AppModule);
