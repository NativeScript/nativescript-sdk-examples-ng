var ns_location_strategy_1 = require('./ns-location-strategy');
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var trace_1 = require("../trace");
var NativescriptPlatformLocation = (function (_super) {
    __extends(NativescriptPlatformLocation, _super);
    function NativescriptPlatformLocation(locationStartegy) {
        _super.call(this);
        this.locationStartegy = locationStartegy;
        trace_1.routerLog("NativescriptPlatformLocation.constructor()");
    }
    NativescriptPlatformLocation.prototype.getBaseHrefFromDOM = function () {
        return "/";
    };
    NativescriptPlatformLocation.prototype.onPopState = function (fn) {
        trace_1.routerLog("NativescriptPlatformLocation.onPopState()");
        this.locationStartegy.onPopState(fn);
    };
    NativescriptPlatformLocation.prototype.onHashChange = function (fn) {
        trace_1.routerLog("NativescriptPlatformLocation.onHashChange()");
    };
    Object.defineProperty(NativescriptPlatformLocation.prototype, "search", {
        get: function () {
            trace_1.routerLog("NativescriptPlatformLocation.get search()");
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NativescriptPlatformLocation.prototype, "hash", {
        get: function () {
            trace_1.routerLog("NativescriptPlatformLocation.get hash()");
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NativescriptPlatformLocation.prototype, "pathname", {
        get: function () {
            trace_1.routerLog("NativescriptPlatformLocation.get pathname()");
            return this.locationStartegy.path();
        },
        set: function (newPath) {
            trace_1.routerLog("NativescriptPlatformLocation.set pathname(): " + newPath);
        },
        enumerable: true,
        configurable: true
    });
    NativescriptPlatformLocation.prototype.pushState = function (state, title, url) {
        trace_1.routerLog("NativescriptPlatformLocation.pushState()");
        this.locationStartegy.pushState(state, title, url, null);
    };
    NativescriptPlatformLocation.prototype.replaceState = function (state, title, url) {
        trace_1.routerLog("NativescriptPlatformLocation.replaceState()");
        this.locationStartegy.replaceState(state, title, url, null);
    };
    NativescriptPlatformLocation.prototype.forward = function () {
        trace_1.routerLog("NativescriptPlatformLocation.forward()");
        throw new Error("NativescriptPlatformLocation.forward() not implemend");
    };
    NativescriptPlatformLocation.prototype.back = function () {
        trace_1.routerLog("NativescriptPlatformLocation.back()");
        this.locationStartegy.back();
    };
    NativescriptPlatformLocation = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ns_location_strategy_1.NSLocationStrategy])
    ], NativescriptPlatformLocation);
    return NativescriptPlatformLocation;
}(common_1.PlatformLocation));
exports.NativescriptPlatformLocation = NativescriptPlatformLocation;
//# sourceMappingURL=ns-platform-location.js.map