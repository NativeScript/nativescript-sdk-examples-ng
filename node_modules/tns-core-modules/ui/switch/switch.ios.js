var common = require("./switch-common");
var utils = require("utils/utils");
var style = require("ui/styling/style");
function onCheckedPropertyChanged(data) {
    var swtch = data.object;
    swtch.ios.on = data.newValue;
}
common.Switch.checkedProperty.metadata.onSetNativeValue = onCheckedPropertyChanged;
global.moduleMerge(common, exports);
var SwitchChangeHandlerImpl = (function (_super) {
    __extends(SwitchChangeHandlerImpl, _super);
    function SwitchChangeHandlerImpl() {
        _super.apply(this, arguments);
    }
    SwitchChangeHandlerImpl.initWithOwner = function (owner) {
        var handler = SwitchChangeHandlerImpl.new();
        handler._owner = owner;
        return handler;
    };
    SwitchChangeHandlerImpl.prototype.valueChanged = function (sender) {
        var owner = this._owner.get();
        if (owner) {
            owner._onPropertyChangedFromNative(common.Switch.checkedProperty, sender.on);
        }
    };
    SwitchChangeHandlerImpl.ObjCExposedMethods = {
        'valueChanged': { returns: interop.types.void, params: [UISwitch] }
    };
    return SwitchChangeHandlerImpl;
}(NSObject));
var Switch = (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        _super.call(this);
        this._ios = new UISwitch();
        this._handler = SwitchChangeHandlerImpl.initWithOwner(new WeakRef(this));
        this._ios.addTargetActionForControlEvents(this._handler, "valueChanged", UIControlEvents.UIControlEventValueChanged);
    }
    Object.defineProperty(Switch.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Switch.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var nativeSize = this._nativeView.sizeThatFits(CGSizeMake(0, 0));
        this.width = nativeSize.width;
        this.height = nativeSize.height;
        var widthAndState = utils.layout.makeMeasureSpec(nativeSize.width, utils.layout.EXACTLY);
        var heightAndState = utils.layout.makeMeasureSpec(nativeSize.height, utils.layout.EXACTLY);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    return Switch;
}(common.Switch));
exports.Switch = Switch;
var SwitchStyler = (function () {
    function SwitchStyler() {
    }
    SwitchStyler.setColorProperty = function (view, newValue) {
        var sw = view.ios;
        sw.thumbTintColor = newValue;
    };
    SwitchStyler.resetColorProperty = function (view, nativeValue) {
        var sw = view.ios;
        sw.thumbTintColor = nativeValue;
    };
    SwitchStyler.getNativeColorValue = function (view) {
        var sw = view.ios;
        return sw.thumbTintColor;
    };
    SwitchStyler.setBackgroundColorProperty = function (view, newValue) {
        var sw = view.ios;
        sw.onTintColor = view.backgroundColor.ios;
    };
    SwitchStyler.resetBackgroundColorProperty = function (view, nativeValue) {
        var sw = view.ios;
        sw.onTintColor = nativeValue;
    };
    SwitchStyler.getBackgroundColorProperty = function (view) {
        var sw = view.ios;
        return sw.onTintColor;
    };
    SwitchStyler.registerHandlers = function () {
        style.registerHandler(style.colorProperty, new style.StylePropertyChangedHandler(SwitchStyler.setColorProperty, SwitchStyler.resetColorProperty, SwitchStyler.getNativeColorValue), "Switch");
        style.registerHandler(style.backgroundColorProperty, new style.StylePropertyChangedHandler(SwitchStyler.setBackgroundColorProperty, SwitchStyler.resetBackgroundColorProperty, SwitchStyler.getBackgroundColorProperty), "Switch");
        style.registerHandler(style.backgroundInternalProperty, style.ignorePropertyHandler, "Switch");
    };
    return SwitchStyler;
}());
exports.SwitchStyler = SwitchStyler;
SwitchStyler.registerHandlers();
