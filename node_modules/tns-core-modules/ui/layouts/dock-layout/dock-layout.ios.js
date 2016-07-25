var utils = require("utils/utils");
var common = require("./dock-layout-common");
var style_1 = require("ui/styling/style");
var enums_1 = require("ui/enums");
var view_1 = require("ui/core/view");
global.moduleMerge(common, exports);
var DockLayout = (function (_super) {
    __extends(DockLayout, _super);
    function DockLayout() {
        _super.apply(this, arguments);
    }
    DockLayout.prototype.onDockChanged = function (view, oldValue, newValue) {
        this.requestLayout();
    };
    DockLayout.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var _this = this;
        DockLayout.adjustChildrenLayoutParams(this, widthMeasureSpec, heightMeasureSpec);
        _super.prototype.onMeasure.call(this, widthMeasureSpec, heightMeasureSpec);
        var measureWidth = 0;
        var measureHeight = 0;
        var width = utils.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = utils.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = utils.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = utils.layout.getMeasureSpecMode(heightMeasureSpec);
        var density = utils.layout.getDisplayDensity();
        var remainingWidth = widthMode === utils.layout.UNSPECIFIED ? Number.MAX_VALUE : width - ((this.paddingLeft + this.paddingRight) * density);
        var remainingHeight = heightMode === utils.layout.UNSPECIFIED ? Number.MAX_VALUE : height - ((this.paddingTop + this.paddingBottom) * density);
        var tempHeight = 0;
        var tempWidth = 0;
        var childWidthMeasureSpec;
        var childHeightMeasureSpec;
        this.eachLayoutChild(function (child, last) {
            if (_this.stretchLastChild && last) {
                childWidthMeasureSpec = utils.layout.makeMeasureSpec(remainingWidth, widthMode);
                childHeightMeasureSpec = utils.layout.makeMeasureSpec(remainingHeight, heightMode);
            }
            else {
                childWidthMeasureSpec = utils.layout.makeMeasureSpec(remainingWidth, widthMode === utils.layout.EXACTLY ? utils.layout.AT_MOST : widthMode);
                childHeightMeasureSpec = utils.layout.makeMeasureSpec(remainingHeight, heightMode === utils.layout.EXACTLY ? utils.layout.AT_MOST : heightMode);
            }
            var childSize = view_1.View.measureChild(_this, child, childWidthMeasureSpec, childHeightMeasureSpec);
            var dock = DockLayout.getDock(child);
            switch (dock) {
                case enums_1.Dock.top:
                case enums_1.Dock.bottom:
                    remainingHeight = Math.max(0, remainingHeight - childSize.measuredHeight);
                    tempHeight += childSize.measuredHeight;
                    measureWidth = Math.max(measureWidth, tempWidth + childSize.measuredWidth);
                    measureHeight = Math.max(measureHeight, tempHeight);
                    break;
                case enums_1.Dock.left:
                case enums_1.Dock.right:
                default:
                    remainingWidth = Math.max(0, remainingWidth - childSize.measuredWidth);
                    tempWidth += childSize.measuredWidth;
                    measureWidth = Math.max(measureWidth, tempWidth);
                    measureHeight = Math.max(measureHeight, tempHeight + childSize.measuredHeight);
                    break;
            }
        });
        measureWidth += (this.paddingLeft + this.paddingRight) * density;
        measureHeight += (this.paddingTop + this.paddingBottom) * density;
        measureWidth = Math.max(measureWidth, this.minWidth * density);
        measureHeight = Math.max(measureHeight, this.minHeight * density);
        var widthAndState = view_1.View.resolveSizeAndState(measureWidth, width, widthMode, 0);
        var heightAndState = view_1.View.resolveSizeAndState(measureHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    DockLayout.prototype.onLayout = function (left, top, right, bottom) {
        var _this = this;
        _super.prototype.onLayout.call(this, left, top, right, bottom);
        var density = utils.layout.getDisplayDensity();
        var childLeft = this.paddingLeft * density;
        var childTop = this.paddingTop * density;
        var x = childLeft;
        var y = childTop;
        var remainingWidth = Math.max(0, right - left - ((this.paddingLeft + this.paddingRight) * density));
        var remainingHeight = Math.max(0, bottom - top - ((this.paddingTop + this.paddingBottom) * density));
        this.eachLayoutChild(function (child, last) {
            var lp = child.style._getValue(style_1.nativeLayoutParamsProperty);
            var childWidth = child.getMeasuredWidth() + (lp.leftMargin + lp.rightMargin) * density;
            var childHeight = child.getMeasuredHeight() + (lp.topMargin + lp.bottomMargin) * density;
            if (last && _this.stretchLastChild) {
                view_1.View.layoutChild(_this, child, x, y, x + remainingWidth, y + remainingHeight);
                return;
            }
            var dock = DockLayout.getDock(child);
            switch (dock) {
                case enums_1.Dock.top:
                    childLeft = x;
                    childTop = y;
                    childWidth = remainingWidth;
                    y += childHeight;
                    remainingHeight = Math.max(0, remainingHeight - childHeight);
                    break;
                case enums_1.Dock.bottom:
                    childLeft = x;
                    childTop = y + remainingHeight - childHeight;
                    childWidth = remainingWidth;
                    remainingHeight = Math.max(0, remainingHeight - childHeight);
                    break;
                case enums_1.Dock.right:
                    childLeft = x + remainingWidth - childWidth;
                    childTop = y;
                    childHeight = remainingHeight;
                    remainingWidth = Math.max(0, remainingWidth - childWidth);
                    break;
                case enums_1.Dock.left:
                default:
                    childLeft = x;
                    childTop = y;
                    childHeight = remainingHeight;
                    x += childWidth;
                    remainingWidth = Math.max(0, remainingWidth - childWidth);
                    break;
            }
            view_1.View.layoutChild(_this, child, childLeft, childTop, childLeft + childWidth, childTop + childHeight);
        });
        DockLayout.restoreOriginalParams(this);
    };
    return DockLayout;
}(common.DockLayout));
exports.DockLayout = DockLayout;
