var async_1 = require('@angular/core/src/facade/async');
var lang_1 = require('@angular/core/src/facade/lang');
var collection_1 = require('@angular/core/src/facade/collection');
var core_1 = require('@angular/core');
var routerHooks = require('@angular/router-deprecated/src/lifecycle/lifecycle_annotations');
var route_lifecycle_reflector_1 = require('@angular/router-deprecated/src/lifecycle/route_lifecycle_reflector');
var router_deprecated_1 = require('@angular/router-deprecated');
var frame_1 = require("ui/frame");
var page_1 = require("ui/page");
var platform_providers_1 = require("../platform-providers");
var trace_1 = require("../trace");
var ns_location_strategy_1 = require("../router/ns-location-strategy");
var detached_loader_1 = require("../common/detached-loader");
var view_util_1 = require("../view-util");
var _resolveToTrue = async_1.PromiseWrapper.resolve(true);
/**
 * Reference Cache
 */
var RefCache = (function () {
    function RefCache() {
        this.cache = new Array();
    }
    RefCache.prototype.push = function (comp, router, loaderRef) {
        this.cache.push({ componentRef: comp, router: router, loaderRef: loaderRef });
    };
    RefCache.prototype.pop = function () {
        return this.cache.pop();
    };
    RefCache.prototype.peek = function () {
        return this.cache[this.cache.length - 1];
    };
    return RefCache;
}());
/**
 * A router outlet that does page navigation in NativeScript
 *
 * ## Use
 *
 * ```
 * <page-router-outlet></page-router-outlet>
 * ```
 */
var PageRouterOutlet = (function (_super) {
    __extends(PageRouterOutlet, _super);
    function PageRouterOutlet(containerRef, compiler, parentRouter, nameAttr, location, loader, device) {
        _super.call(this, containerRef, loader, parentRouter, nameAttr);
        this.containerRef = containerRef;
        this.compiler = compiler;
        this.parentRouter = parentRouter;
        this.location = location;
        this.isInitalPage = true;
        this.refCache = new RefCache();
        this.componentRef = null;
        this.currentInstruction = null;
        this.viewUtil = new view_util_1.ViewUtil(device);
    }
    /**
     * Called by the Router to instantiate a new component during the commit phase of a navigation.
     * This method in turn is responsible for calling the `routerOnActivate` hook of its child.
     */
    PageRouterOutlet.prototype.activate = function (nextInstruction) {
        this.log("activate", nextInstruction);
        var previousInstruction = this.currentInstruction;
        this.currentInstruction = nextInstruction;
        if (this.location.isPageNavigatingBack()) {
            return this.activateOnGoBack(nextInstruction, previousInstruction);
        }
        else {
            return this.activateOnGoForward(nextInstruction, previousInstruction);
        }
    };
    PageRouterOutlet.prototype.activateOnGoBack = function (nextInstruction, previousInstruction) {
        trace_1.routerLog("PageRouterOutlet.activate() - Back naviation, so load from cache: " + nextInstruction.componentType.name);
        this.location.finishBackPageNavigation();
        // Get Component form ref and just call the activate hook
        var cacheItem = this.refCache.peek();
        this.componentRef = cacheItem.componentRef;
        this.replaceChildRouter(cacheItem.router);
        if (route_lifecycle_reflector_1.hasLifecycleHook(routerHooks.routerOnActivate, this.componentRef.componentType)) {
            return this.componentRef.instance
                .routerOnActivate(nextInstruction, previousInstruction);
        }
    };
    PageRouterOutlet.prototype.activateOnGoForward = function (nextInstruction, previousInstruction) {
        var _this = this;
        var componentType = nextInstruction.componentType;
        var resultPromise;
        var loaderRef = undefined;
        var childRouter = this.parentRouter.childRouter(componentType);
        var providersArray = [
            core_1.provide(router_deprecated_1.RouteData, { useValue: nextInstruction.routeData }),
            core_1.provide(router_deprecated_1.RouteParams, { useValue: new router_deprecated_1.RouteParams(nextInstruction.params) }),
            core_1.provide(router_deprecated_1.Router, { useValue: childRouter }),
        ];
        if (this.isInitalPage) {
            trace_1.routerLog("PageRouterOutlet.activate() inital page - just load component: " + componentType.name);
            this.isInitalPage = false;
            resultPromise = this.compiler.resolveComponent(componentType).then(function (componentFactory) {
                var childInjector = core_1.ReflectiveInjector.resolveAndCreate(providersArray, _this.containerRef.parentInjector);
                return _this.containerRef.createComponent(componentFactory, _this.containerRef.length, childInjector, null);
            });
        }
        else {
            trace_1.routerLog("PageRouterOutlet.activate() forward navigation - create detached loader in the loader container: " + componentType.name);
            var page_2 = new page_1.Page();
            providersArray.push(core_1.provide(page_1.Page, { useValue: page_2 }));
            var childInjector_1 = core_1.ReflectiveInjector.resolveAndCreate(providersArray, this.containerRef.parentInjector);
            resultPromise = this.compiler.resolveComponent(detached_loader_1.DetachedLoader).then(function (componentFactory) {
                loaderRef = _this.childContainerRef.createComponent(componentFactory, _this.childContainerRef.length, childInjector_1, null);
                return loaderRef.instance.loadComponent(componentType)
                    .then(function (actualCoponenetRef) {
                    return _this.loadComponentInPage(page_2, actualCoponenetRef);
                });
            });
        }
        return resultPromise.then(function (componentRef) {
            _this.componentRef = componentRef;
            _this.refCache.push(componentRef, childRouter, loaderRef);
            if (route_lifecycle_reflector_1.hasLifecycleHook(routerHooks.routerOnActivate, componentType)) {
                return _this.componentRef.instance
                    .routerOnActivate(nextInstruction, previousInstruction);
            }
        });
    };
    PageRouterOutlet.prototype.loadComponentInPage = function (page, componentRef) {
        var _this = this;
        //Component loaded. Find its root native view.
        var componentView = componentRef.location.nativeElement;
        //Remove it from original native parent.
        this.viewUtil.removeChild(componentView.parent, componentView);
        //Add it to the new page
        page.content = componentView;
        this.location.navigateToNewPage();
        return new Promise(function (resolve, reject) {
            page.on('navigatingTo', function () {
                // Finish activation when page navigation has started
                resolve(componentRef);
            });
            page.on('navigatedFrom', global.Zone.current.wrap(function (args) {
                if (args.isBackNavigation) {
                    _this.location.beginBackPageNavigation();
                    _this.location.back();
                }
            }));
            frame_1.topmost().navigate({
                animated: true,
                create: function () { return page; }
            });
        });
    };
    /**
     * Called by the {@link Router} when an outlet disposes of a component's contents.
     * This method in turn is responsible for calling the `routerOnDeactivate` hook of its child.
     */
    PageRouterOutlet.prototype.deactivate = function (nextInstruction) {
        var _this = this;
        this.log("deactivate", nextInstruction);
        var instruction = this.currentInstruction;
        var next = _resolveToTrue;
        if (lang_1.isPresent(this.componentRef) &&
            lang_1.isPresent(instruction) &&
            route_lifecycle_reflector_1.hasLifecycleHook(routerHooks.routerOnDeactivate, this.componentRef.componentType)) {
            next = async_1.PromiseWrapper.resolve(this.componentRef.instance.routerOnDeactivate(nextInstruction, this.currentInstruction));
        }
        if (this.location.isPageNavigatingBack()) {
            trace_1.routerLog("PageRouterOutlet.deactivate() while going back - should destroy: " + instruction.componentType.name);
            return next.then(function (_) {
                var popedItem = _this.refCache.pop();
                var popedRef = popedItem.componentRef;
                if (_this.componentRef !== popedRef) {
                    throw new Error("Current componentRef is different for cached componentRef");
                }
                if (lang_1.isPresent(_this.componentRef)) {
                    _this.componentRef.destroy();
                    _this.componentRef = null;
                }
                if (lang_1.isPresent(popedItem.loaderRef)) {
                    popedItem.loaderRef.destroy();
                }
            });
        }
        else {
            return next;
        }
    };
    /**
     * Called by the {@link Router} during recognition phase of a navigation.
     * PageRouterOutlet will aways return true as cancelling navigation
     * is currently not supported in NativeScript.
     */
    PageRouterOutlet.prototype.routerCanDeactivate = function (nextInstruction) {
        this.log("routerCanDeactivate", nextInstruction);
        return _resolveToTrue;
    };
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
    PageRouterOutlet.prototype.routerCanReuse = function (nextInstruction) {
        this.log("routerCanReuse", nextInstruction);
        var result;
        if (lang_1.isBlank(this.currentInstruction) || this.currentInstruction.componentType != nextInstruction.componentType) {
            result = false;
        }
        else if (route_lifecycle_reflector_1.hasLifecycleHook(routerHooks.routerCanReuse, this.currentInstruction.componentType)) {
            result = this.componentRef.instance
                .routerCanReuse(nextInstruction, this.currentInstruction);
        }
        else {
            result = nextInstruction == this.currentInstruction ||
                (lang_1.isPresent(nextInstruction.params) && lang_1.isPresent(this.currentInstruction.params) &&
                    collection_1.StringMapWrapper.equals(nextInstruction.params, this.currentInstruction.params));
        }
        trace_1.routerLog("PageRouterOutlet.routerCanReuse(): " + result);
        return async_1.PromiseWrapper.resolve(result);
    };
    /**
     * Called by the {@link Router} during recognition phase of a navigation.
     *
     * If this resolves to `false`, the given navigation is cancelled.
     *
     * This method delegates to the child component's `routerCanDeactivate` hook if it exists,
     * and otherwise resolves to true.
     */
    PageRouterOutlet.prototype.reuse = function (nextInstruction) {
        var previousInstruction = this.currentInstruction;
        this.currentInstruction = nextInstruction;
        if (lang_1.isBlank(this.componentRef)) {
            throw new Error("Cannot reuse an outlet that does not contain a component.");
        }
        return async_1.PromiseWrapper.resolve(route_lifecycle_reflector_1.hasLifecycleHook(routerHooks.routerOnReuse, this.componentRef.componentType) ?
            this.componentRef.instance.routerOnReuse(nextInstruction, previousInstruction) : true);
    };
    PageRouterOutlet.prototype.replaceChildRouter = function (childRouter) {
        // HACKY HACKY HACKY
        // When navigationg back - we need to set the child router of
        // our router - with the one we have created for the previosus page.
        // Otherwise router-outlets inside that page wont't work.
        // Curretly there is no other way to do that (parentRouter.childRouter() will create ne router).
        this.parentRouter["_childRouter"] = childRouter;
    };
    PageRouterOutlet.prototype.log = function (method, nextInstruction) {
        trace_1.routerLog("PageRouterOutlet." + method + " isBack: " + this.location.isPageNavigatingBack() + " nextUrl: " + nextInstruction.urlPath);
    };
    __decorate([
        core_1.ViewChild('loader', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], PageRouterOutlet.prototype, "childContainerRef", void 0);
    PageRouterOutlet = __decorate([
        core_1.Component({
            selector: 'page-router-outlet',
            template: "\n        <DetachedContainer>\n            <Placeholder #loader></Placeholder>\n        </DetachedContainer>"
        }),
        __param(3, core_1.Attribute('name')),
        __param(6, core_1.Inject(platform_providers_1.DEVICE)), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ComponentResolver, router_deprecated_1.Router, String, ns_location_strategy_1.NSLocationStrategy, core_1.DynamicComponentLoader, Object])
    ], PageRouterOutlet);
    return PageRouterOutlet;
}(router_deprecated_1.RouterOutlet));
exports.PageRouterOutlet = PageRouterOutlet;
//# sourceMappingURL=page-router-outlet.js.map