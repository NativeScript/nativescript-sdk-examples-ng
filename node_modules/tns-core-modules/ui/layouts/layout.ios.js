var layoutBase = require("ui/layouts/layout-base");
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        _super.call(this);
        this._view = new UIView();
    }
    Object.defineProperty(Layout.prototype, "ios", {
        get: function () {
            return this._view;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Layout.prototype, "_nativeView", {
        get: function () {
            return this._view;
        },
        enumerable: true,
        configurable: true
    });
    Layout.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
    };
    return Layout;
}(layoutBase.LayoutBase));
exports.Layout = Layout;
