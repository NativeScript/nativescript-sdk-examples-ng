var utils = require("utils/utils");
var common = require("./absolute-layout-common");
var view_1 = require("ui/core/view");
var style_1 = require("ui/styling/style");
global.moduleMerge(common, exports);
var AbsoluteLayout = (function (_super) {
    __extends(AbsoluteLayout, _super);
    function AbsoluteLayout() {
        _super.apply(this, arguments);
    }
    AbsoluteLayout.prototype.onLeftChanged = function (view, oldValue, newValue) {
        this.requestLayout();
    };
    AbsoluteLayout.prototype.onTopChanged = function (view, oldValue, newValue) {
        this.requestLayout();
    };
    AbsoluteLayout.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var _this = this;
        AbsoluteLayout.adjustChildrenLayoutParams(this, widthMeasureSpec, heightMeasureSpec);
        _super.prototype.onMeasure.call(this, widthMeasureSpec, heightMeasureSpec);
        var measureWidth = 0;
        var measureHeight = 0;
        var width = utils.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = utils.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = utils.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = utils.layout.getMeasureSpecMode(heightMeasureSpec);
        var childMeasureSpec = utils.layout.makeMeasureSpec(0, utils.layout.UNSPECIFIED);
        var density = utils.layout.getDisplayDensity();
        this.eachLayoutChild(function (child, last) {
            var childSize = view_1.View.measureChild(_this, child, childMeasureSpec, childMeasureSpec);
            measureWidth = Math.max(measureWidth, AbsoluteLayout.getLeft(child) * density + childSize.measuredWidth);
            measureHeight = Math.max(measureHeight, AbsoluteLayout.getTop(child) * density + childSize.measuredHeight);
        });
        measureWidth += (this.paddingLeft + this.paddingRight) * density;
        measureHeight += (this.paddingTop + this.paddingBottom) * density;
        measureWidth = Math.max(measureWidth, this.minWidth * density);
        measureHeight = Math.max(measureHeight, this.minHeight * density);
        var widthAndState = view_1.View.resolveSizeAndState(measureWidth, width, widthMode, 0);
        var heightAndState = view_1.View.resolveSizeAndState(measureHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    AbsoluteLayout.prototype.onLayout = function (left, top, right, bottom) {
        var _this = this;
        _super.prototype.onLayout.call(this, left, top, right, bottom);
        var density = utils.layout.getDisplayDensity();
        this.eachLayoutChild(function (child, last) {
            var lp = child.style._getValue(style_1.nativeLayoutParamsProperty);
            var childWidth = child.getMeasuredWidth();
            var childHeight = child.getMeasuredHeight();
            var childLeft = (_this.paddingLeft + AbsoluteLayout.getLeft(child)) * density;
            var childTop = (_this.paddingTop + AbsoluteLayout.getTop(child)) * density;
            var childRight = childLeft + childWidth + (lp.leftMargin + lp.rightMargin) * density;
            var childBottom = childTop + childHeight + (lp.topMargin + lp.bottomMargin) * density;
            view_1.View.layoutChild(_this, child, childLeft, childTop, childRight, childBottom);
        });
        AbsoluteLayout.restoreOriginalParams(this);
    };
    return AbsoluteLayout;
}(common.AbsoluteLayout));
exports.AbsoluteLayout = AbsoluteLayout;
