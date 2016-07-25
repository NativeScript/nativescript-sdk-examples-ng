var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var trace_1 = require("../trace");
/**
 * The RouterLink directive lets you link to specific parts of your app.
 *
 * Consider the following route configuration:

 * ```
 * [{ path: '/user', component: UserCmp }]
 * ```
 *
 * When linking to this `User` route, you can write:
 *
 * ```
 * <a [nsRouterLink]="['/user']">link to user component</a>
 * ```
 *
 * RouterLink expects the value to be an array of path segments, followed by the params
 * for that level of routing. For instance `['/team', {teamId: 1}, 'user', {userId: 2}]`
 * means that we want to generate a link to `/team;teamId=1/user;userId=2`.
 *
 * The first segment name can be prepended with `/`, `./`, or `../`.
 * If the segment begins with `/`, the router will look up the route from the root of the app.
 * If the segment begins with `./`, or doesn't begin with a slash, the router will
 * instead look in the current component's children for the route.
 * And if the segment begins with `../`, the router will go up one level.
 */
var NSRouterLink = (function () {
    /**
     * @internal
     */
    function NSRouterLink(router, route) {
        this.router = router;
        this.route = route;
        this.commands = [];
    }
    Object.defineProperty(NSRouterLink.prototype, "params", {
        set: function (data) {
            if (Array.isArray(data)) {
                this.commands = data;
            }
            else {
                this.commands = [data];
            }
        },
        enumerable: true,
        configurable: true
    });
    NSRouterLink.prototype.onTap = function () {
        trace_1.routerLog("nsRouterLink.tapped: " + this.commands);
        this.router.navigate(this.commands, { relativeTo: this.route, queryParams: this.queryParams, fragment: this.fragment });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NSRouterLink.prototype, "target", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NSRouterLink.prototype, "queryParams", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NSRouterLink.prototype, "fragment", void 0);
    __decorate([
        core_1.Input("nsRouterLink"), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], NSRouterLink.prototype, "params", null);
    __decorate([
        core_1.HostListener("tap"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], NSRouterLink.prototype, "onTap", null);
    NSRouterLink = __decorate([
        core_1.Directive({ selector: '[nsRouterLink]' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], NSRouterLink);
    return NSRouterLink;
}());
exports.NSRouterLink = NSRouterLink;
//# sourceMappingURL=ns-router-link.js.map