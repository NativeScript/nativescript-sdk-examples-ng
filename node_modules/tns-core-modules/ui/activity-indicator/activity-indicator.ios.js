var aiCommon = require("./activity-indicator-common");
var style = require("ui/styling/style");
function onBusyPropertyChanged(data) {
    var indicator = data.object;
    if (!indicator.ios) {
        return;
    }
    var activityIndicator = indicator.ios;
    if (data.newValue) {
        activityIndicator.startAnimating();
    }
    else {
        activityIndicator.stopAnimating();
    }
    if (activityIndicator.hidesWhenStopped) {
        indicator.requestLayout();
    }
}
aiCommon.ActivityIndicator.busyProperty.metadata.onSetNativeValue = onBusyPropertyChanged;
global.moduleMerge(aiCommon, exports);
var ActivityIndicator = (function (_super) {
    __extends(ActivityIndicator, _super);
    function ActivityIndicator() {
        _super.call(this);
        this._ios = UIActivityIndicatorView.alloc().initWithActivityIndicatorStyle(UIActivityIndicatorViewStyle.UIActivityIndicatorViewStyleGray);
    }
    Object.defineProperty(ActivityIndicator.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    return ActivityIndicator;
}(aiCommon.ActivityIndicator));
exports.ActivityIndicator = ActivityIndicator;
var ActivityIndicatorStyler = (function () {
    function ActivityIndicatorStyler() {
    }
    ActivityIndicatorStyler.setColorProperty = function (view, newValue) {
        var bar = view.ios;
        bar.color = newValue;
    };
    ActivityIndicatorStyler.resetColorProperty = function (view, nativeValue) {
        var bar = view.ios;
        bar.color = nativeValue;
    };
    ActivityIndicatorStyler.getNativeColorValue = function (view) {
        var bar = view.ios;
        return bar.color;
    };
    ActivityIndicatorStyler.registerHandlers = function () {
        style.registerHandler(style.colorProperty, new style.StylePropertyChangedHandler(ActivityIndicatorStyler.setColorProperty, ActivityIndicatorStyler.resetColorProperty, ActivityIndicatorStyler.getNativeColorValue), "ActivityIndicator");
    };
    return ActivityIndicatorStyler;
}());
exports.ActivityIndicatorStyler = ActivityIndicatorStyler;
ActivityIndicatorStyler.registerHandlers();
