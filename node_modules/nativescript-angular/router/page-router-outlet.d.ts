import { ComponentFactory, ResolvedReflectiveProvider, ViewContainerRef, ComponentResolver } from '@angular/core';
import { RouterOutletMap, ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router/directives/router_outlet';
import { NSLocationStrategy } from "./ns-location-strategy";
import { Device } from "platform";
export declare class PageRouterOutlet extends RouterOutlet {
    private containerRef;
    private locationStrategy;
    private viewUtil;
    private refCache;
    private isInitalPage;
    private detachedLoaderFactory;
    private currnetActivatedComp;
    private currentActivatedRoute;
    isActivated: boolean;
    component: Object;
    activatedRoute: ActivatedRoute;
    constructor(parentOutletMap: RouterOutletMap, containerRef: ViewContainerRef, name: string, locationStrategy: NSLocationStrategy, compiler: ComponentResolver, device: Device);
    deactivate(): void;
    /**
     * Called by the Router to instantiate a new component during the commit phase of a navigation.
     * This method in turn is responsible for calling the `routerOnActivate` hook of its child.
     */
    activate(factory: ComponentFactory<any>, activatedRoute: ActivatedRoute, providers: ResolvedReflectiveProvider[], outletMap: RouterOutletMap): void;
    private activateOnGoForward(factory, activatedRoute, providers);
    private activateOnGoBack(factory, activatedRoute, providers);
    private loadComponentInPage(page, componentRef);
}
