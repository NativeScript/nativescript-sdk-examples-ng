var common_1 = require('@angular/common');
var trace_1 = require("../trace");
var frame_1 = require("ui/frame");
var NSLocationStrategy = (function (_super) {
    __extends(NSLocationStrategy, _super);
    function NSLocationStrategy() {
        _super.call(this);
        this.states = new Array();
        this.popStateCallbacks = new Array();
        this._isPageNavigationgBack = false;
        this._isPageNavigatingForward = false;
        trace_1.routerLog("NSLocationStrategy.constructor()");
    }
    NSLocationStrategy.prototype.path = function () {
        trace_1.routerLog("NSLocationStrategy.path()");
        var state = this.peekState();
        return state ? state.url : "/";
    };
    NSLocationStrategy.prototype.prepareExternalUrl = function (internal) {
        trace_1.routerLog("NSLocationStrategy.prepareExternalUrl() internal: " + internal);
        return internal;
    };
    NSLocationStrategy.prototype.pushState = function (state, title, url, queryParams) {
        trace_1.routerLog("NSLocationStrategy.pushState state: " + state + ", title: " + title + ", url: " + url + ", queryParams: " + queryParams + ", isPageNavigation: " + this._isPageNavigatingForward);
        this.pushStateInternal(state, title, url, queryParams);
    };
    NSLocationStrategy.prototype.pushStateInternal = function (state, title, url, queryParams) {
        var isNewPage = this._isPageNavigatingForward;
        this._isPageNavigatingForward = false;
        this.states.push({
            state: state,
            title: title,
            url: url,
            queryParams: queryParams,
            isPageNavigation: isNewPage
        });
    };
    NSLocationStrategy.prototype.replaceState = function (state, title, url, queryParams) {
        trace_1.routerLog("NSLocationStrategy.replaceState state: " + state + ", title: " + title + ", url: " + url + ", queryParams: " + queryParams);
        if (this.states.length > 0) {
            var oldState = this.states.pop();
            trace_1.routerLog("NSLocationStrategy.replaceState state poped: " + oldState.state + ", title: " + oldState.title + ", url: " + oldState.url + ", queryParams: " + oldState.queryParams);
        }
        this.pushStateInternal(state, title, url, queryParams);
    };
    NSLocationStrategy.prototype.forward = function () {
        trace_1.routerLog("NSLocationStrategy.forward");
        throw new Error("Not implemented");
    };
    NSLocationStrategy.prototype.back = function () {
        if (this._isPageNavigationgBack) {
            // We are navigating to the previous page 
            // clear the stack until we get to a page navigation state
            var state = this.states.pop();
            var count = 1;
            while (!state.isPageNavigation) {
                state = this.states.pop();
                count++;
            }
            trace_1.routerLog("NSLocationStrategy.back() while navigating back. States popped: " + count);
            this.callPopState(state, true);
        }
        else {
            var state = this.peekState();
            if (state.isPageNavigation) {
                // This was a page navigation - so navigate through frame.
                trace_1.routerLog("NSLocationStrategy.back() while not navigating back but top state is page - will call frame.goback()");
                frame_1.topmost().goBack();
            }
            else {
                // Nested navigation - just pop the state
                trace_1.routerLog("NSLocationStrategy.back() while not navigating back but top state is not page - just pop");
                this.callPopState(this.states.pop(), true);
            }
        }
    };
    NSLocationStrategy.prototype.onPopState = function (fn) {
        trace_1.routerLog("NSLocationStrategy.onPopState");
        this.popStateCallbacks.push(fn);
    };
    NSLocationStrategy.prototype.getBaseHref = function () {
        trace_1.routerLog("NSLocationStrategy.getBaseHref()");
        return "";
    };
    NSLocationStrategy.prototype.callPopState = function (state, pop) {
        if (pop === void 0) { pop = true; }
        var change = { url: state.url, pop: pop };
        for (var _i = 0, _a = this.popStateCallbacks; _i < _a.length; _i++) {
            var fn = _a[_i];
            fn(change);
        }
    };
    NSLocationStrategy.prototype.peekState = function () {
        if (this.states.length > 0) {
            return this.states[this.states.length - 1];
        }
        return null;
    };
    // Methods for syncing with page navigation in PageRouterOutlet
    NSLocationStrategy.prototype.beginBackPageNavigation = function () {
        trace_1.routerLog("NSLocationStrategy.startGoBack()");
        if (this._isPageNavigationgBack) {
            throw new Error("Calling startGoBack while going back.");
        }
        this._isPageNavigationgBack = true;
    };
    NSLocationStrategy.prototype.finishBackPageNavigation = function () {
        trace_1.routerLog("NSLocationStrategy.finishBackPageNavigation()");
        if (!this._isPageNavigationgBack) {
            throw new Error("Calling endGoBack while not going back.");
        }
        this._isPageNavigationgBack = false;
    };
    NSLocationStrategy.prototype.isPageNavigatingBack = function () {
        return this._isPageNavigationgBack;
    };
    NSLocationStrategy.prototype.navigateToNewPage = function () {
        trace_1.routerLog("NSLocationStrategy.navigateToNewPage()");
        if (this._isPageNavigatingForward) {
            throw new Error("Calling navigateToNewPage while already navigating to new page.");
        }
        this._isPageNavigatingForward = true;
    };
    return NSLocationStrategy;
}(common_1.LocationStrategy));
exports.NSLocationStrategy = NSLocationStrategy;
//# sourceMappingURL=ns-location-strategy.js.map