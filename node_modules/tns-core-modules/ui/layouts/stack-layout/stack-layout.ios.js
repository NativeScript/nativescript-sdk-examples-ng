var common = require("./stack-layout-common");
var utils = require("utils/utils");
var view_1 = require("ui/core/view");
var enums_1 = require("ui/enums");
var style_1 = require("ui/styling/style");
global.moduleMerge(common, exports);
var StackLayout = (function (_super) {
    __extends(StackLayout, _super);
    function StackLayout() {
        _super.apply(this, arguments);
        this._totalLength = 0;
    }
    StackLayout.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var _this = this;
        StackLayout.adjustChildrenLayoutParams(this, widthMeasureSpec, heightMeasureSpec);
        _super.prototype.onMeasure.call(this, widthMeasureSpec, heightMeasureSpec);
        var density = utils.layout.getDisplayDensity();
        var measureWidth = 0;
        var measureHeight = 0;
        var width = utils.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = utils.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = utils.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = utils.layout.getMeasureSpecMode(heightMeasureSpec);
        var isVertical = this.orientation === enums_1.Orientation.vertical;
        var verticalPadding = (this.paddingTop + this.paddingBottom) * density;
        var horizontalPadding = (this.paddingLeft + this.paddingRight) * density;
        var measureSpec;
        var mode = isVertical ? heightMode : widthMode;
        var remainingLength;
        if (mode === utils.layout.UNSPECIFIED) {
            measureSpec = utils.layout.UNSPECIFIED;
            remainingLength = 0;
        }
        else {
            measureSpec = utils.layout.AT_MOST;
            remainingLength = isVertical ? height - verticalPadding : width - horizontalPadding;
        }
        var childMeasureSpec;
        if (isVertical) {
            var childWidth = (widthMode === utils.layout.UNSPECIFIED) ? 0 : width - horizontalPadding;
            childWidth = Math.max(0, childWidth);
            childMeasureSpec = utils.layout.makeMeasureSpec(childWidth, widthMode);
        }
        else {
            var childHeight = (heightMode === utils.layout.UNSPECIFIED) ? 0 : height - verticalPadding;
            childHeight = Math.max(0, childHeight);
            childMeasureSpec = utils.layout.makeMeasureSpec(childHeight, heightMode);
        }
        var childSize;
        this.eachLayoutChild(function (child, last) {
            if (isVertical) {
                childSize = view_1.View.measureChild(_this, child, childMeasureSpec, utils.layout.makeMeasureSpec(remainingLength, measureSpec));
                measureWidth = Math.max(measureWidth, childSize.measuredWidth);
                var viewHeight = childSize.measuredHeight;
                measureHeight += viewHeight;
                remainingLength = Math.max(0, remainingLength - viewHeight);
            }
            else {
                childSize = view_1.View.measureChild(_this, child, utils.layout.makeMeasureSpec(remainingLength, measureSpec), childMeasureSpec);
                measureHeight = Math.max(measureHeight, childSize.measuredHeight);
                var viewWidth = childSize.measuredWidth;
                measureWidth += viewWidth;
                remainingLength = Math.max(0, remainingLength - viewWidth);
            }
        });
        measureWidth += horizontalPadding;
        measureHeight += verticalPadding;
        measureWidth = Math.max(measureWidth, this.minWidth * density);
        measureHeight = Math.max(measureHeight, this.minHeight * density);
        this._totalLength = isVertical ? measureHeight : measureWidth;
        var widthAndState = view_1.View.resolveSizeAndState(measureWidth, width, widthMode, 0);
        var heightAndState = view_1.View.resolveSizeAndState(measureHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    StackLayout.prototype.onLayout = function (left, top, right, bottom) {
        _super.prototype.onLayout.call(this, left, top, right, bottom);
        if (this.orientation === enums_1.Orientation.vertical) {
            this.layoutVertical(left, top, right, bottom);
        }
        else {
            this.layoutHorizontal(left, top, right, bottom);
        }
        StackLayout.restoreOriginalParams(this);
    };
    StackLayout.prototype.layoutVertical = function (left, top, right, bottom) {
        var _this = this;
        var density = utils.layout.getDisplayDensity();
        var paddingLeft = this.paddingLeft * density;
        var paddingRight = this.paddingRight * density;
        var paddingTop = this.paddingTop * density;
        var paddingBottom = this.paddingBottom * density;
        var childTop;
        var childLeft = paddingLeft;
        var childRight = right - left - paddingRight;
        switch (this.verticalAlignment) {
            case enums_1.VerticalAlignment.center:
            case enums_1.VerticalAlignment.middle:
                childTop = (bottom - top - this._totalLength) / 2 + paddingTop - paddingBottom;
                break;
            case enums_1.VerticalAlignment.bottom:
                childTop = bottom - top - this._totalLength + paddingTop - paddingBottom;
                break;
            case enums_1.VerticalAlignment.top:
            case enums_1.VerticalAlignment.stretch:
            default:
                childTop = paddingTop;
                break;
        }
        this.eachLayoutChild(function (child, last) {
            var lp = child.style._getValue(style_1.nativeLayoutParamsProperty);
            var childHeight = child.getMeasuredHeight() + (lp.topMargin + lp.bottomMargin) * density;
            view_1.View.layoutChild(_this, child, childLeft, childTop, childRight, childTop + childHeight);
            childTop += childHeight;
        });
    };
    StackLayout.prototype.layoutHorizontal = function (left, top, right, bottom) {
        var _this = this;
        var density = utils.layout.getDisplayDensity();
        var paddingLeft = this.paddingLeft * density;
        var paddingRight = this.paddingRight * density;
        var paddingTop = this.paddingTop * density;
        var paddingBottom = this.paddingBottom * density;
        var childTop = paddingTop;
        var childLeft;
        var childBottom = bottom - top - paddingBottom;
        switch (this.horizontalAlignment) {
            case enums_1.HorizontalAlignment.center:
                childLeft = (right - left - this._totalLength) / 2 + paddingLeft - paddingRight;
                break;
            case enums_1.HorizontalAlignment.right:
                childLeft = right - left - this._totalLength + paddingLeft - paddingRight;
                break;
            case enums_1.HorizontalAlignment.left:
            case enums_1.HorizontalAlignment.stretch:
            default:
                childLeft = paddingLeft;
                break;
        }
        this.eachLayoutChild(function (child, last) {
            var lp = child.style._getValue(style_1.nativeLayoutParamsProperty);
            var childWidth = child.getMeasuredWidth() + (lp.leftMargin + lp.rightMargin) * density;
            view_1.View.layoutChild(_this, child, childLeft, childTop, childLeft + childWidth, childBottom);
            childLeft += childWidth;
        });
    };
    return StackLayout;
}(common.StackLayout));
exports.StackLayout = StackLayout;
