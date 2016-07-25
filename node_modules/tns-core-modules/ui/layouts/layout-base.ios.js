var common = require("./layout-base-common");
var LayoutBase = (function (_super) {
    __extends(LayoutBase, _super);
    function LayoutBase() {
        _super.apply(this, arguments);
    }
    LayoutBase.prototype._onClipToBoundsChanged = function (oldValue, newValue) {
        if (this._nativeView) {
            this._nativeView.clipsToBounds = newValue;
        }
    };
    return LayoutBase;
}(common.LayoutBase));
exports.LayoutBase = LayoutBase;
