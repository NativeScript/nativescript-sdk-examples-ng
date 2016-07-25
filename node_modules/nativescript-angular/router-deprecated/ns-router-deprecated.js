var ns_router_link_1 = require('./ns-router-link');
var page_router_outlet_1 = require('./page-router-outlet');
var ns_location_strategy_1 = require('../router/ns-location-strategy');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var trace_1 = require("../trace");
exports.routerTraceCategory = trace_1.routerTraceCategory;
exports.NS_ROUTER_PROVIDERS = [
    router_deprecated_1.ROUTER_PROVIDERS,
    ns_location_strategy_1.NSLocationStrategy,
    core_1.provide(common_1.LocationStrategy, { useExisting: ns_location_strategy_1.NSLocationStrategy }),
];
exports.NS_ROUTER_DIRECTIVES = [
    ns_router_link_1.NSRouterLink,
    page_router_outlet_1.PageRouterOutlet
];
//# sourceMappingURL=ns-router-deprecated.js.map