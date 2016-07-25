var utils = require("utils/utils");
var common = require("./wrap-layout-common");
var view_1 = require("ui/core/view");
var enums_1 = require("ui/enums");
var style_1 = require("ui/styling/style");
global.moduleMerge(common, exports);
var WrapLayout = (function (_super) {
    __extends(WrapLayout, _super);
    function WrapLayout() {
        _super.apply(this, arguments);
        this._lengths = new Array();
    }
    WrapLayout.getChildMeasureSpec = function (parentMode, parentLength, itemLength) {
        if (itemLength > 0) {
            return utils.layout.makeMeasureSpec(itemLength, utils.layout.EXACTLY);
        }
        else if (parentMode === utils.layout.UNSPECIFIED) {
            return utils.layout.makeMeasureSpec(0, utils.layout.UNSPECIFIED);
        }
        else {
            return utils.layout.makeMeasureSpec(parentLength, utils.layout.AT_MOST);
        }
    };
    WrapLayout.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var _this = this;
        WrapLayout.adjustChildrenLayoutParams(this, widthMeasureSpec, heightMeasureSpec);
        _super.prototype.onMeasure.call(this, widthMeasureSpec, heightMeasureSpec);
        var measureWidth = 0;
        var measureHeight = 0;
        var widthMode = utils.layout.getMeasureSpecMode(widthMeasureSpec);
        var heightMode = utils.layout.getMeasureSpecMode(heightMeasureSpec);
        var density = utils.layout.getDisplayDensity();
        var horizontalPadding = (this.paddingLeft + this.paddingRight) * density;
        var verticalPadding = (this.paddingTop + this.paddingBottom) * density;
        var availableWidth = widthMode === utils.layout.UNSPECIFIED ? Number.MAX_VALUE : utils.layout.getMeasureSpecSize(widthMeasureSpec) - horizontalPadding;
        var availableHeight = heightMode === utils.layout.UNSPECIFIED ? Number.MAX_VALUE : utils.layout.getMeasureSpecSize(heightMeasureSpec) - verticalPadding;
        var childWidthMeasureSpec = WrapLayout.getChildMeasureSpec(widthMode, availableWidth, this.itemWidth * density);
        var childHeightMeasureSpec = WrapLayout.getChildMeasureSpec(heightMode, availableHeight, this.itemHeight * density);
        var remainingWidth = availableWidth;
        var remainingHeight = availableHeight;
        this._lengths.length = 0;
        var rowOrColumn = 0;
        var maxLength = 0;
        var isVertical = this.orientation === enums_1.Orientation.vertical;
        var useItemWidth = this.itemWidth > 0;
        var useItemHeight = this.itemHeight > 0;
        var itemWidth = this.itemWidth;
        var itemHeight = this.itemHeight;
        this.eachLayoutChild(function (child, last) {
            var desiredSize = view_1.View.measureChild(_this, child, childWidthMeasureSpec, childHeightMeasureSpec);
            var childMeasuredWidth = useItemWidth ? itemWidth : desiredSize.measuredWidth;
            var childMeasuredHeight = useItemHeight ? itemHeight : desiredSize.measuredHeight;
            var isFirst = _this._lengths.length <= rowOrColumn;
            if (isVertical) {
                if (childMeasuredHeight > remainingHeight) {
                    rowOrColumn++;
                    maxLength = Math.max(maxLength, measureHeight);
                    measureHeight = childMeasuredHeight;
                    remainingHeight = availableHeight - childMeasuredHeight;
                    _this._lengths[isFirst ? rowOrColumn - 1 : rowOrColumn] = childMeasuredWidth;
                }
                else {
                    remainingHeight -= childMeasuredHeight;
                    measureHeight += childMeasuredHeight;
                }
            }
            else {
                if (childMeasuredWidth > remainingWidth) {
                    rowOrColumn++;
                    maxLength = Math.max(maxLength, measureWidth);
                    measureWidth = childMeasuredWidth;
                    remainingWidth = availableWidth - childMeasuredWidth;
                    _this._lengths[isFirst ? rowOrColumn - 1 : rowOrColumn] = childMeasuredHeight;
                }
                else {
                    remainingWidth -= childMeasuredWidth;
                    measureWidth += childMeasuredWidth;
                }
            }
            if (isFirst) {
                _this._lengths[rowOrColumn] = isVertical ? childMeasuredWidth : childMeasuredHeight;
            }
            else {
                _this._lengths[rowOrColumn] = Math.max(_this._lengths[rowOrColumn], isVertical ? childMeasuredWidth : childMeasuredHeight);
            }
        });
        if (isVertical) {
            measureHeight = Math.max(maxLength, measureHeight);
            this._lengths.forEach(function (value, index, array) {
                measureWidth += value;
            });
        }
        else {
            measureWidth = Math.max(maxLength, measureWidth);
            this._lengths.forEach(function (value, index, array) {
                measureHeight += value;
            });
        }
        measureWidth += horizontalPadding;
        measureHeight += verticalPadding;
        measureWidth = Math.max(measureWidth, this.minWidth * density);
        measureHeight = Math.max(measureHeight, this.minHeight * density);
        var widthAndState = view_1.View.resolveSizeAndState(measureWidth, utils.layout.getMeasureSpecSize(widthMeasureSpec), widthMode, 0);
        var heightAndState = view_1.View.resolveSizeAndState(measureHeight, utils.layout.getMeasureSpecSize(heightMeasureSpec), heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    WrapLayout.prototype.onLayout = function (left, top, right, bottom) {
        var _this = this;
        _super.prototype.onLayout.call(this, left, top, right, bottom);
        var isVertical = this.orientation === enums_1.Orientation.vertical;
        var density = utils.layout.getDisplayDensity();
        var childLeft = this.paddingLeft * density;
        var childTop = this.paddingTop * density;
        var childrenLength;
        if (isVertical) {
            childrenLength = bottom - top - (this.paddingBottom * density);
        }
        else {
            childrenLength = right - left - (this.paddingRight * density);
        }
        var rowOrColumn = 0;
        this.eachLayoutChild(function (child, last) {
            var lp = child.style._getValue(style_1.nativeLayoutParamsProperty);
            var childWidth = child.getMeasuredWidth() + (lp.leftMargin + lp.rightMargin) * density;
            var childHeight = child.getMeasuredHeight() + (lp.topMargin + lp.bottomMargin) * density;
            var length = _this._lengths[rowOrColumn];
            if (isVertical) {
                childWidth = length;
                childHeight = _this.itemHeight > 0 ? _this.itemHeight * density : childHeight;
                var isFirst = childTop === _this.paddingTop * density;
                if (childTop + childHeight > childrenLength) {
                    childTop = _this.paddingTop * density;
                    if (!isFirst) {
                        childLeft += length;
                    }
                    rowOrColumn++;
                    childWidth = _this._lengths[isFirst ? rowOrColumn - 1 : rowOrColumn];
                }
            }
            else {
                childWidth = _this.itemWidth > 0 ? _this.itemWidth * density : childWidth;
                childHeight = length;
                var isFirst = childLeft === _this.paddingLeft * density;
                if (childLeft + childWidth > childrenLength) {
                    childLeft = _this.paddingLeft * density;
                    if (!isFirst) {
                        childTop += length;
                    }
                    rowOrColumn++;
                    childHeight = _this._lengths[isFirst ? rowOrColumn - 1 : rowOrColumn];
                }
            }
            view_1.View.layoutChild(_this, child, childLeft, childTop, childLeft + childWidth, childTop + childHeight);
            if (isVertical) {
                childTop += childHeight;
            }
            else {
                childLeft += childWidth;
            }
        });
        WrapLayout.restoreOriginalParams(this);
    };
    return WrapLayout;
}(common.WrapLayout));
exports.WrapLayout = WrapLayout;
