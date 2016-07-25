var common = require("./text-base-common");
var types = require("utils/types");
var TextBase = (function (_super) {
    __extends(TextBase, _super);
    function TextBase() {
        _super.apply(this, arguments);
        this._settingFormattedTextPropertyToNative = false;
    }
    TextBase.prototype._onTextPropertyChanged = function (data) {
        var newValue = types.toUIString(data.newValue);
        this.ios.text = newValue;
        this.style._updateTextDecoration();
        this.style._updateTextTransform();
        this._requestLayoutOnTextChanged();
    };
    TextBase.prototype._setFormattedTextPropertyToNative = function (value) {
        var newText = value ? value._formattedText : null;
        this.ios.attributedText = newText;
        this.style._updateTextDecoration();
        this.style._updateTextTransform();
        this.requestLayout();
    };
    TextBase.prototype._onStylePropertyChanged = function (property) {
        if (this._settingFormattedTextPropertyToNative) {
            return;
        }
        if (this.formattedText) {
            this._settingFormattedTextPropertyToNative = true;
            this._setFormattedTextPropertyToNative(this.formattedText);
            this._settingFormattedTextPropertyToNative = false;
        }
    };
    return TextBase;
}(common.TextBase));
exports.TextBase = TextBase;
