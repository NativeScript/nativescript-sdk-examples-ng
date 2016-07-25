var common = require("./progress-common");
var style = require("ui/styling/style");
function onValuePropertyChanged(data) {
    var progress = data.object;
    progress.ios.progress = data.newValue / progress.maxValue;
}
function onMaxValuePropertyChanged(data) {
    var progress = data.object;
    progress.ios.progress = progress.value / data.newValue;
}
common.Progress.valueProperty.metadata.onSetNativeValue = onValuePropertyChanged;
common.Progress.maxValueProperty.metadata.onSetNativeValue = onMaxValuePropertyChanged;
global.moduleMerge(common, exports);
var Progress = (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        _super.call(this);
        this._ios = new UIProgressView();
    }
    Object.defineProperty(Progress.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    return Progress;
}(common.Progress));
exports.Progress = Progress;
var ProgressStyler = (function () {
    function ProgressStyler() {
    }
    ProgressStyler.setColorProperty = function (view, newValue) {
        var bar = view.ios;
        bar.progressTintColor = newValue;
    };
    ProgressStyler.resetColorProperty = function (view, nativeValue) {
        var bar = view.ios;
        bar.progressTintColor = nativeValue;
    };
    ProgressStyler.getNativeColorValue = function (view) {
        var bar = view.ios;
        return bar.progressTintColor;
    };
    ProgressStyler.setBackgroundColorProperty = function (view, newValue) {
        var bar = view.ios;
        bar.trackTintColor = newValue;
    };
    ProgressStyler.resetBackgroundColorProperty = function (view, nativeValue) {
        var bar = view.ios;
        bar.trackTintColor = nativeValue;
    };
    ProgressStyler.getBackgroundColorProperty = function (view) {
        var bar = view.ios;
        return bar.trackTintColor;
    };
    ProgressStyler.registerHandlers = function () {
        style.registerHandler(style.colorProperty, new style.StylePropertyChangedHandler(ProgressStyler.setColorProperty, ProgressStyler.resetColorProperty, ProgressStyler.getNativeColorValue), "Progress");
        style.registerHandler(style.backgroundColorProperty, new style.StylePropertyChangedHandler(ProgressStyler.setBackgroundColorProperty, ProgressStyler.resetBackgroundColorProperty, ProgressStyler.getBackgroundColorProperty), "Progress");
    };
    return ProgressStyler;
}());
exports.ProgressStyler = ProgressStyler;
ProgressStyler.registerHandlers();
