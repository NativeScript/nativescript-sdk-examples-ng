var core_1 = require('@angular/core');
var lang_1 = require('@angular/core/src/facade/lang');
var router_1 = require('@angular/router');
var router_outlet_1 = require('@angular/router/directives/router_outlet');
var ns_location_strategy_1 = require("./ns-location-strategy");
var platform_providers_1 = require("../platform-providers");
var trace_1 = require("../trace");
var detached_loader_1 = require("../common/detached-loader");
var view_util_1 = require("../view-util");
var frame_1 = require("ui/frame");
var page_1 = require("ui/page");
/**
 * Reference Cache
 */
var RefCache = (function () {
    function RefCache() {
        this.cache = new Array();
    }
    RefCache.prototype.push = function (comp, loaderRef) {
        this.cache.push({ componentRef: comp, loaderRef: loaderRef });
    };
    RefCache.prototype.pop = function () {
        return this.cache.pop();
    };
    RefCache.prototype.peek = function () {
        return this.cache[this.cache.length - 1];
    };
    return RefCache;
}());
var PageRouterOutlet = (function (_super) {
    __extends(PageRouterOutlet, _super);
    function PageRouterOutlet(parentOutletMap, containerRef, name, locationStrategy, compiler, device) {
        var _this = this;
        _super.call(this, parentOutletMap, containerRef, name);
        this.containerRef = containerRef;
        this.locationStrategy = locationStrategy;
        this.refCache = new RefCache();
        this.isInitalPage = true;
        this.viewUtil = new view_util_1.ViewUtil(device);
        compiler.resolveComponent(detached_loader_1.DetachedLoader).then(function (detachedLoaderFactory) {
            log("DetachedLoaderFactory leaded");
            _this.detachedLoaderFactory = detachedLoaderFactory;
        });
    }
    Object.defineProperty(PageRouterOutlet.prototype, "isActivated", {
        get: function () {
            return !!this.currnetActivatedComp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageRouterOutlet.prototype, "component", {
        get: function () {
            if (!this.currnetActivatedComp) {
                throw new Error('Outlet is not activated');
            }
            return this.currnetActivatedComp.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageRouterOutlet.prototype, "activatedRoute", {
        get: function () {
            if (!this.currnetActivatedComp) {
                throw new Error('Outlet is not activated');
            }
            return this.currentActivatedRoute;
        },
        enumerable: true,
        configurable: true
    });
    PageRouterOutlet.prototype.deactivate = function () {
        if (this.locationStrategy.isPageNavigatingBack()) {
            log("PageRouterOutlet.deactivate() while going back - should destroy");
            var popedItem = this.refCache.pop();
            var popedRef = popedItem.componentRef;
            if (this.currnetActivatedComp !== popedRef) {
                throw new Error("Current componentRef is different for cached componentRef");
            }
            if (lang_1.isPresent(this.currnetActivatedComp)) {
                this.currnetActivatedComp.destroy();
                this.currnetActivatedComp = null;
            }
            if (lang_1.isPresent(popedItem.loaderRef)) {
                popedItem.loaderRef.destroy();
            }
        }
        else {
            log("PageRouterOutlet.deactivate() while going foward - do nothing");
        }
    };
    /**
     * Called by the Router to instantiate a new component during the commit phase of a navigation.
     * This method in turn is responsible for calling the `routerOnActivate` hook of its child.
     */
    PageRouterOutlet.prototype.activate = function (factory, activatedRoute, providers, outletMap) {
        this.outletMap = outletMap;
        this.currentActivatedRoute = activatedRoute;
        if (this.locationStrategy.isPageNavigatingBack()) {
            this.activateOnGoBack(factory, activatedRoute, providers);
        }
        else {
            this.activateOnGoForward(factory, activatedRoute, providers);
        }
    };
    PageRouterOutlet.prototype.activateOnGoForward = function (factory, activatedRoute, providers) {
        if (this.isInitalPage) {
            log("PageRouterOutlet.activate() inital page - just load component: " + activatedRoute.component);
            this.isInitalPage = false;
            var inj = core_1.ReflectiveInjector.fromResolvedProviders(providers, this.containerRef.parentInjector);
            this.currnetActivatedComp = this.containerRef.createComponent(factory, this.containerRef.length, inj, []);
            this.refCache.push(this.currnetActivatedComp, null);
        }
        else {
            log("PageRouterOutlet.activate() forward navigation - create detached loader in the loader container: " + activatedRoute.component);
            var page = new page_1.Page();
            var pageResolvedProvider = core_1.ReflectiveInjector.resolve([core_1.provide(page_1.Page, { useValue: page })]);
            var childInjector = core_1.ReflectiveInjector.fromResolvedProviders(providers.concat(pageResolvedProvider), this.containerRef.parentInjector);
            var loaderRef = this.containerRef.createComponent(this.detachedLoaderFactory, this.containerRef.length, childInjector, []);
            this.currnetActivatedComp = loaderRef.instance.loadWithFactory(factory);
            this.loadComponentInPage(page, this.currnetActivatedComp);
            this.refCache.push(this.currnetActivatedComp, loaderRef);
        }
    };
    PageRouterOutlet.prototype.activateOnGoBack = function (factory, activatedRoute, providers) {
        log("PageRouterOutlet.activate() - Back naviation, so load from cache: " + activatedRoute.component);
        this.locationStrategy.finishBackPageNavigation();
        var cacheItem = this.refCache.peek();
        this.currnetActivatedComp = cacheItem.componentRef;
    };
    PageRouterOutlet.prototype.loadComponentInPage = function (page, componentRef) {
        var _this = this;
        //Component loaded. Find its root native view.
        var componentView = componentRef.location.nativeElement;
        //Remove it from original native parent.
        this.viewUtil.removeChild(componentView.parent, componentView);
        //Add it to the new page
        page.content = componentView;
        this.locationStrategy.navigateToNewPage();
        page.on('navigatedFrom', global.Zone.current.wrap(function (args) {
            if (args.isBackNavigation) {
                _this.locationStrategy.beginBackPageNavigation();
                _this.locationStrategy.back();
            }
        }));
        frame_1.topmost().navigate({
            animated: true,
            create: function () { return page; }
        });
    };
    PageRouterOutlet = __decorate([
        core_1.Directive({ selector: 'page-router-outlet' }),
        __param(2, core_1.Attribute('name')),
        __param(5, core_1.Inject(platform_providers_1.DEVICE)), 
        __metadata('design:paramtypes', [router_1.RouterOutletMap, core_1.ViewContainerRef, String, ns_location_strategy_1.NSLocationStrategy, core_1.ComponentResolver, Object])
    ], PageRouterOutlet);
    return PageRouterOutlet;
}(router_outlet_1.RouterOutlet));
exports.PageRouterOutlet = PageRouterOutlet;
function log(msg) {
    trace_1.routerLog(msg);
}
//# sourceMappingURL=page-router-outlet.js.map