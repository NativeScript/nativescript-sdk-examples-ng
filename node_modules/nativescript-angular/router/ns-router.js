var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var common_router_providers_1 = require('@angular/router/common_router_providers');
var ns_router_link_1 = require('./ns-router-link');
var page_router_outlet_1 = require('./page-router-outlet');
var ns_location_strategy_1 = require('./ns-location-strategy');
var ns_platform_location_1 = require('./ns-platform-location');
var trace_1 = require("../trace");
exports.routerTraceCategory = trace_1.routerTraceCategory;
exports.NS_ROUTER_PROVIDERS = [
    ns_location_strategy_1.NSLocationStrategy,
    core_1.provide(common_1.LocationStrategy, { useExisting: ns_location_strategy_1.NSLocationStrategy }),
    ns_platform_location_1.NativescriptPlatformLocation,
    core_1.provide(common_1.PlatformLocation, { useClass: ns_platform_location_1.NativescriptPlatformLocation }),
];
exports.NS_ROUTER_DIRECTIVES = [
    ns_router_link_1.NSRouterLink,
    page_router_outlet_1.PageRouterOutlet
];
function nsProvideRouter(config, opts) {
    return exports.NS_ROUTER_PROVIDERS.concat(common_router_providers_1.provideRouter(config, opts));
}
exports.nsProvideRouter = nsProvideRouter;
;
//# sourceMappingURL=ns-router.js.map