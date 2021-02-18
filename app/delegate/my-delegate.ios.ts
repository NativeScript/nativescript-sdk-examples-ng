import { DeepLinkData } from "../shared/deep-link-data";

@NativeClass
class MyDelegate extends UIResponder implements UIApplicationDelegate {
    // tslint:disable-next-line
    public static ObjCProtocols = [UIApplicationDelegate];

    applicationHandleOpenURL(application: UIApplication, url: NSURL): boolean {
        const dld = new DeepLinkData(url);
        return true;
    }
}

export {MyDelegate};

