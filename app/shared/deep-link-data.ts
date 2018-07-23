import { setString } from "application-settings";
import { isAndroid, isIOS } from "platform";
import { RouterExtensions } from "nativescript-angular/router";
export class DeepLinkData {
    constructor(url: any, androidActivity?: any) {
        if (isAndroid) {
            this.getAndroidIntent(androidActivity);
        }
        else if (isIOS) {
            this.getParams(url);
        }
    }
    private getParams(url) {
        var resulturl: string = <any>(url).toString();;
        if (resulturl.substring(0, 10) == "examplesgo") {
            let value = this.getParameterByName("gotoexample", resulturl);
            if (value) {
                setString("gotoexample", value);
            }
        }

    }
    private getParameterByName(name, url) {
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return results[2].replace(/\+/g, " ");
    }
    private getAndroidIntent(args) {
        var intent = args.getIntent();
        let value = intent.getData();
        if (value) {
            this.getParams(value);
        }
    }
}