import { ViewContainerRef, DynamicComponentLoader, ComponentResolver } from '@angular/core';
import { Router, RouterOutlet, ComponentInstruction } from '@angular/router-deprecated';
import { Device } from "platform";
import { NSLocationStrategy } from "../router/ns-location-strategy";
/**
 * A router outlet that does page navigation in NativeScript
 *
 * ## Use
 *
 * ```
 * <page-router-outlet></page-router-outlet>
 * ```
 */
export declare class PageRouterOutlet extends RouterOutlet {
    private containerRef;
    private compiler;
    private parentRouter;
    private location;
    private isInitalPage;
    private refCache;
    private componentRef;
    private currentInstruction;
    private viewUtil;
    childContainerRef: ViewContainerRef;
    constructor(containerRef: ViewContainerRef, compiler: ComponentResolver, parentRouter: Router, nameAttr: string, location: NSLocationStrategy, loader: DynamicComponentLoader, device: Device);
    /**
     * Called by the Router to instantiate a new component during the commit phase of a navigation.
     * This method in turn is responsible for calling the `routerOnActivate` hook of its child.
     */
    activate(nextInstruction: ComponentInstruction): Promise<any>;
    private activateOnGoBack(nextInstruction, previousInstruction);
    private activateOnGoForward(nextInstruction, previousInstruction);
    private loadComponentInPage(page, componentRef);
    /**
     * Called by the {@link Router} when an outlet disposes of a component's contents.
     * This method in turn is responsible for calling the `routerOnDeactivate` hook of its child.
     */
    deactivate(nextInstruction: ComponentInstruction): Promise<any>;
    /**
     * Called by the {@link Router} during recognition phase of a navigation.
     * PageRouterOutlet will aways return true as cancelling navigation
     * is currently not supported in NativeScript.
     */
    routerCanDeactivate(nextInstruction: ComponentInstruction): Promise<boolean>;
    /**
     * Called by the {@link Router} during recognition phase of a navigation.
     *
     * If the new child component has a different Type than the existing child component,
     * this will resolve to `false`. You can't reuse an old component when the new component
     * is of a different Type.
     *
     * Otherwise, this method delegates to the child component's `routerCanReuse` hook if it exists,
     * or resolves to true if the hook is not present and params are equal.
     */
    routerCanReuse(nextInstruction: ComponentInstruction): Promise<boolean>;
    /**
     * Called by the {@link Router} during recognition phase of a navigation.
     *
     * If this resolves to `false`, the given navigation is cancelled.
     *
     * This method delegates to the child component's `routerCanDeactivate` hook if it exists,
     * and otherwise resolves to true.
     */
    reuse(nextInstruction: ComponentInstruction): Promise<any>;
    private replaceChildRouter(childRouter);
    private log(method, nextInstruction);
}
