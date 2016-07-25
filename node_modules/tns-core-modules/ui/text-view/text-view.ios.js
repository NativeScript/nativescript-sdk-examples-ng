var common = require("./text-view-common");
var text_base_1 = require("ui/text-base");
var enums_1 = require("ui/enums");
var style = require("ui/styling/style");
var types_1 = require("utils/types");
global.moduleMerge(common, exports);
var UITextViewDelegateImpl = (function (_super) {
    __extends(UITextViewDelegateImpl, _super);
    function UITextViewDelegateImpl() {
        _super.apply(this, arguments);
    }
    UITextViewDelegateImpl.initWithOwner = function (owner) {
        var impl = UITextViewDelegateImpl.new();
        impl._owner = owner;
        return impl;
    };
    UITextViewDelegateImpl.prototype.textViewShouldBeginEditing = function (textView) {
        var owner = this._owner.get();
        if (owner) {
            owner._hideHint();
        }
        return true;
    };
    UITextViewDelegateImpl.prototype.textViewDidBeginEditing = function (textView) {
        var owner = this._owner.get();
        if (owner) {
            owner.style._updateTextDecoration();
            owner.style._updateTextTransform();
        }
    };
    UITextViewDelegateImpl.prototype.textViewDidEndEditing = function (textView) {
        var owner = this._owner.get();
        if (owner) {
            if (owner.updateTextTrigger === enums_1.UpdateTextTrigger.focusLost) {
                owner._onPropertyChangedFromNative(text_base_1.TextBase.textProperty, textView.text);
            }
            owner.dismissSoftInput();
            owner._refreshHintState(owner.hint, textView.text);
            owner.style._updateTextDecoration();
            owner.style._updateTextTransform();
        }
    };
    UITextViewDelegateImpl.prototype.textViewDidChange = function (textView) {
        var owner = this._owner.get();
        if (owner) {
            var range = textView.selectedRange;
            owner.style._updateTextDecoration();
            owner.style._updateTextTransform();
            textView.selectedRange = range;
            if (owner.updateTextTrigger === enums_1.UpdateTextTrigger.textChanged) {
                owner._onPropertyChangedFromNative(text_base_1.TextBase.textProperty, textView.text);
            }
        }
    };
    UITextViewDelegateImpl.ObjCProtocols = [UITextViewDelegate];
    return UITextViewDelegateImpl;
}(NSObject));
var TextView = (function (_super) {
    __extends(TextView, _super);
    function TextView() {
        _super.call(this);
        this._ios = new UITextView();
        if (!this._ios.font) {
            this._ios.font = UIFont.systemFontOfSize(12);
        }
        this._delegate = UITextViewDelegateImpl.initWithOwner(new WeakRef(this));
    }
    TextView.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.delegate = this._delegate;
        this.style._updateTextDecoration();
        this.style._updateTextTransform();
    };
    TextView.prototype.onUnloaded = function () {
        this._ios.delegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    Object.defineProperty(TextView.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    TextView.prototype._onEditablePropertyChanged = function (data) {
        this._ios.editable = data.newValue;
    };
    TextView.prototype._onHintPropertyChanged = function (data) {
        this._refreshHintState(data.newValue, this.text);
    };
    TextView.prototype._onTextPropertyChanged = function (data) {
        _super.prototype._onTextPropertyChanged.call(this, data);
        this._refreshHintState(this.hint, data.newValue);
    };
    TextView.prototype._refreshHintState = function (hint, text) {
        if (hint && !text) {
            this._showHint(hint);
        }
        else {
            this._hideHint();
        }
    };
    TextView.prototype._showHint = function (hint) {
        this.ios.textColor = this.ios.textColor ? this.ios.textColor.colorWithAlphaComponent(0.22) : UIColor.blackColor().colorWithAlphaComponent(0.22);
        this.ios.text = types_1.isNullOrUndefined(hint) ? "" : hint + "";
        this.ios.isShowingHint = true;
    };
    TextView.prototype._hideHint = function () {
        this.ios.textColor = this.color ? this.color.ios : null;
        this.ios.text = types_1.isNullOrUndefined(this.text) ? "" : this.text + "";
        this.ios.isShowingHint = false;
    };
    return TextView;
}(common.TextView));
exports.TextView = TextView;
var TextViewStyler = (function () {
    function TextViewStyler() {
    }
    TextViewStyler.setColorProperty = function (v, newValue) {
        var textView = v._nativeView;
        TextViewStyler._setTextViewColor(textView, newValue);
    };
    TextViewStyler.resetColorProperty = function (v, nativeValue) {
        var textView = v._nativeView;
        TextViewStyler._setTextViewColor(textView, nativeValue);
    };
    TextViewStyler._setTextViewColor = function (textView, newValue) {
        var color = newValue;
        if (textView.isShowingHint && color) {
            textView.textColor = color.colorWithAlphaComponent(0.22);
        }
        else {
            textView.textColor = color;
            textView.tintColor = color;
        }
    };
    TextViewStyler.getNativeColorValue = function (v) {
        var textView = v._nativeView;
        if (textView.isShowingHint && textView.textColor) {
            return textView.textColor.colorWithAlphaComponent(1);
        }
        else {
            return textView.textColor;
        }
    };
    TextViewStyler.setPaddingProperty = function (view, newValue) {
        var top = newValue.top + view.borderWidth;
        var left = newValue.left + view.borderWidth;
        var bottom = newValue.bottom + view.borderWidth;
        var right = newValue.right + view.borderWidth;
        view._nativeView.textContainerInset = UIEdgeInsetsFromString("{" + top + "," + left + "," + bottom + "," + right + "}");
    };
    TextViewStyler.resetPaddingProperty = function (view, nativeValue) {
        view._nativeView.textContainerInset = UIEdgeInsetsFromString("{0,0,0,0}");
    };
    TextViewStyler.registerHandlers = function () {
        style.registerHandler(style.colorProperty, new style.StylePropertyChangedHandler(TextViewStyler.setColorProperty, TextViewStyler.resetColorProperty, TextViewStyler.getNativeColorValue), "TextView");
        style.registerHandler(style.nativePaddingsProperty, new style.StylePropertyChangedHandler(TextViewStyler.setPaddingProperty, TextViewStyler.resetPaddingProperty), "TextView");
    };
    return TextViewStyler;
}());
exports.TextViewStyler = TextViewStyler;
TextViewStyler.registerHandlers();
