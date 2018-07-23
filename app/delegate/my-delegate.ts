import {DeepLinkData} from "../shared/deep-link-data";
export class MyDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];

    applicationHandleOpenURL(application: UIApplication, url: NSURL): boolean {
        new DeepLinkData(url);
        return true;
    }
}