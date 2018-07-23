import { DeepLinkData } from "../shared/deep-link-data";
export class MyDelegate extends UIResponder implements UIApplicationDelegate {
    public static objCProtocols = [UIApplicationDelegate];

    applicationHandleOpenURL(application: UIApplication, url: NSURL): boolean {
        const dld = new DeepLinkData(url);
        return true;
    }
}
