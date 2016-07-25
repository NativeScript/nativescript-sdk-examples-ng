var common = require("./label-common");
var enums = require("ui/enums");
var utils = require("utils/utils");
var view_1 = require("ui/core/view");
var style = require("ui/styling/style");
global.moduleMerge(common, exports);
var background;
function ensureBackground() {
    if (!background) {
        background = require("ui/styling/background");
    }
}
var FixedSize;
(function (FixedSize) {
    FixedSize[FixedSize["NONE"] = 0] = "NONE";
    FixedSize[FixedSize["WIDTH"] = 1] = "WIDTH";
    FixedSize[FixedSize["HEIGHT"] = 2] = "HEIGHT";
    FixedSize[FixedSize["BOTH"] = 3] = "BOTH";
})(FixedSize || (FixedSize = {}));
var Label = (function (_super) {
    __extends(Label, _super);
    function Label() {
        _super.call(this);
        this._ios = TNSLabel.new();
        this._ios.userInteractionEnabled = true;
    }
    Object.defineProperty(Label.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Label.prototype, "_nativeView", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Label.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this.style._updateTextDecoration();
        this.style._updateTextTransform();
    };
    Label.prototype._requestLayoutOnTextChanged = function () {
        if (this._fixedSize === FixedSize.BOTH) {
            return;
        }
        if (this._fixedSize === FixedSize.WIDTH && !this.textWrap) {
            return;
        }
        _super.prototype._requestLayoutOnTextChanged.call(this);
    };
    Label.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var nativeView = this._nativeView;
        if (nativeView) {
            var width = utils.layout.getMeasureSpecSize(widthMeasureSpec);
            var widthMode = utils.layout.getMeasureSpecMode(widthMeasureSpec);
            var height = utils.layout.getMeasureSpecSize(heightMeasureSpec);
            var heightMode = utils.layout.getMeasureSpecMode(heightMeasureSpec);
            if (widthMode === utils.layout.UNSPECIFIED) {
                width = Number.POSITIVE_INFINITY;
            }
            if (heightMode === utils.layout.UNSPECIFIED) {
                height = Number.POSITIVE_INFINITY;
            }
            this._fixedSize = (widthMode === utils.layout.EXACTLY ? FixedSize.WIDTH : FixedSize.NONE)
                | (heightMode === utils.layout.EXACTLY ? FixedSize.HEIGHT : FixedSize.NONE);
            var nativeSize = nativeView.sizeThatFits(CGSizeMake(width, height));
            var labelWidth = nativeSize.width;
            if (!this.textWrap && this.style.whiteSpace !== enums.WhiteSpace.nowrap) {
                labelWidth = Math.min(labelWidth, width);
            }
            var measureWidth = Math.max(labelWidth, this.minWidth);
            var measureHeight = Math.max(nativeSize.height, this.minHeight);
            var widthAndState = view_1.View.resolveSizeAndState(measureWidth, width, widthMode, 0);
            var heightAndState = view_1.View.resolveSizeAndState(measureHeight, height, heightMode, 0);
            this.setMeasuredDimension(widthAndState, heightAndState);
        }
    };
    return Label;
}(common.Label));
exports.Label = Label;
var zeroInsets = UIEdgeInsetsZero;
var LabelStyler = (function () {
    function LabelStyler() {
    }
    LabelStyler.setBackgroundInternalProperty = function (view, newValue) {
        var uiLabel = view._nativeView;
        if (uiLabel && uiLabel.layer) {
            var flipImage = true;
            ensureBackground();
            var uiColor = background.ios.createBackgroundUIColor(view, flipImage);
            var cgColor = uiColor ? uiColor.CGColor : null;
            uiLabel.layer.backgroundColor = cgColor;
        }
    };
    LabelStyler.resetBackgroundInternalProperty = function (view, nativeValue) {
        var uiLabel = view._nativeView;
        if (uiLabel && uiLabel.layer) {
            var uiColor = nativeValue;
            var cgColor = uiColor ? uiColor.CGColor : null;
            uiLabel.layer.backgroundColor = cgColor;
        }
    };
    LabelStyler.getNativeBackgroundInternalValue = function (view) {
        var uiLabel = view._nativeView;
        if (uiLabel && uiLabel.layer && uiLabel.layer.backgroundColor) {
            return UIColor.colorWithCGColor(uiLabel.layer.backgroundColor);
        }
        return undefined;
    };
    LabelStyler.setBorderWidthProperty = function (view, newValue) {
        LabelStyler.setNativeBorderWidth(view, newValue);
    };
    LabelStyler.resetBorderWidthProperty = function (view, nativeValue) {
        LabelStyler.setNativeBorderWidth(view, nativeValue);
    };
    LabelStyler.setNativeBorderWidth = function (view, newValue) {
        var nativeView = view._nativeView;
        if (nativeView instanceof UIView) {
            nativeView.layer.borderWidth = newValue;
        }
        if (nativeView instanceof TNSLabel) {
            nativeView.borderThickness = { top: newValue, left: newValue, bottom: newValue, right: newValue };
        }
    };
    LabelStyler.getBorderWidthProperty = function (view) {
        var nativeView = view._nativeView;
        if (nativeView instanceof UIView) {
            return nativeView.layer.borderWidth;
        }
        return 0;
    };
    LabelStyler.setPaddingProperty = function (view, newValue) {
        LabelStyler.setNativePadding(view, newValue);
    };
    LabelStyler.resetPaddingProperty = function (view, nativeValue) {
        LabelStyler.setNativePadding(view, nativeValue);
    };
    LabelStyler.setNativePadding = function (view, padding) {
        var nativeView = view._nativeView;
        if (nativeView instanceof TNSLabel) {
            nativeView.padding = { top: padding.top, left: padding.left, bottom: padding.bottom, right: padding.right };
        }
    };
    LabelStyler.getPaddingProperty = function (view) {
        var nativeView = view._nativeView;
        if (nativeView instanceof TNSLabel) {
            return nativeView.padding;
        }
        return zeroInsets;
    };
    LabelStyler.registerHandlers = function () {
        style.registerHandler(style.backgroundInternalProperty, new style.StylePropertyChangedHandler(LabelStyler.setBackgroundInternalProperty, LabelStyler.resetBackgroundInternalProperty, LabelStyler.getNativeBackgroundInternalValue), "Label");
        style.registerHandler(style.borderWidthProperty, new style.StylePropertyChangedHandler(LabelStyler.setBorderWidthProperty, LabelStyler.resetBorderWidthProperty, LabelStyler.getBorderWidthProperty), "Label");
        style.registerHandler(style.nativePaddingsProperty, new style.StylePropertyChangedHandler(LabelStyler.setPaddingProperty, LabelStyler.resetPaddingProperty, LabelStyler.getPaddingProperty), "Label");
    };
    return LabelStyler;
}());
exports.LabelStyler = LabelStyler;
LabelStyler.registerHandlers();
