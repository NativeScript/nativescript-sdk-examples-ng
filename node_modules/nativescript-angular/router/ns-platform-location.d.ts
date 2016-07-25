import { NSLocationStrategy } from './ns-location-strategy';
import { PlatformLocation, UrlChangeListener } from '@angular/common';
export declare class NativescriptPlatformLocation extends PlatformLocation {
    private locationStartegy;
    constructor(locationStartegy: NSLocationStrategy);
    getBaseHrefFromDOM(): string;
    onPopState(fn: UrlChangeListener): void;
    onHashChange(fn: UrlChangeListener): void;
    search: string;
    hash: string;
    pathname: string;
    pushState(state: any, title: string, url: string): void;
    replaceState(state: any, title: string, url: string): void;
    forward(): void;
    back(): void;
}
