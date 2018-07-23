import { setString } from "application-settings";
import { isAndroid, isIOS } from "platform";

export class DeepLinkData {
    constructor(url: any, androidActivity?: any) {
        if (isAndroid) {
            this.getAndroidIntent(androidActivity);
        } else if (isIOS) {
            this.getParams(url);
        }
    }
    private getParams(url) {
        let resulturl: string = <any> (url).toString();
        if (resulturl.substring(0, 10) === "examplesgo") {
            let value = this.getParameterByName("gotoexample", resulturl);
            if (value) {
                setString("gotoexample", value);
            }
        }

    }
    private getParameterByName(name, url) {
        name = name.replace(/[\[\]]/g, "\\$&");
        let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return "";
        }
        return results[2].replace(/\+/g, " ");
    }
    private getAndroidIntent(args) {
        let intent = args.getIntent();
        let value = intent.getData();
        if (value) {
            this.getParams(value);
        }
    }
}
