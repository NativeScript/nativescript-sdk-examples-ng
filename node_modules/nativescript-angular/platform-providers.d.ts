import { Page } from 'ui/page';
import { Provider, OpaqueToken } from '@angular/core/src/di';
export declare const APP_ROOT_VIEW: OpaqueToken;
export declare const DEVICE: OpaqueToken;
export declare const defaultPageProvider: Provider;
export declare function getDefaultPage(): Page;
export declare const defaultDeviceProvider: Provider;
