import { LocationStrategy } from '@angular/common';
export declare class NSLocationStrategy extends LocationStrategy {
    private states;
    private popStateCallbacks;
    private _isPageNavigationgBack;
    private _isPageNavigatingForward;
    constructor();
    path(): string;
    prepareExternalUrl(internal: string): string;
    pushState(state: any, title: string, url: string, queryParams: string): void;
    pushStateInternal(state: any, title: string, url: string, queryParams: string): void;
    replaceState(state: any, title: string, url: string, queryParams: string): void;
    forward(): void;
    back(): void;
    onPopState(fn: (_: any) => any): void;
    getBaseHref(): string;
    private callPopState(state, pop?);
    private peekState();
    beginBackPageNavigation(): void;
    finishBackPageNavigation(): void;
    isPageNavigatingBack(): boolean;
    navigateToNewPage(): void;
}
