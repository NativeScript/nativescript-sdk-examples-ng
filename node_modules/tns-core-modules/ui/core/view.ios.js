var types = require("utils/types");
var viewCommon = require("./view-common");
var trace = require("trace");
var utils = require("utils/utils");
var style = require("ui/styling/style");
var enums = require("ui/enums");
var background;
function ensureBackground() {
    if (!background) {
        background = require("ui/styling/background");
    }
}
global.moduleMerge(viewCommon, exports);
function onAutomationTextPropertyChanged(data) {
    var view = data.object;
    view._nativeView.accessibilityIdentifier = data.newValue;
}
viewCommon.View.automationTextProperty.metadata.onSetNativeValue = onAutomationTextPropertyChanged;
function onOriginPropertyChanged(data) {
    var view = data.object;
    view._updateOriginPoint();
}
viewCommon.View.originXProperty.metadata.onSetNativeValue = onOriginPropertyChanged;
viewCommon.View.originYProperty.metadata.onSetNativeValue = onOriginPropertyChanged;
function onIsEnabledPropertyChanged(data) {
    var view = data.object;
    if (!view._nativeView) {
        return;
    }
    if (view._nativeView instanceof UIControl) {
        view._nativeView.enabled = data.newValue;
    }
}
viewCommon.View.isEnabledProperty.metadata.onSetNativeValue = onIsEnabledPropertyChanged;
function onIsUserInteractionEnabledPropertyChanged(data) {
    var view = data.object;
    if (!view._nativeView) {
        return;
    }
    view._nativeView.userInteractionEnabled = data.newValue;
}
viewCommon.View.isUserInteractionEnabledProperty.metadata.onSetNativeValue = onIsUserInteractionEnabledPropertyChanged;
var PFLAG_FORCE_LAYOUT = 1;
var PFLAG_MEASURED_DIMENSION_SET = 1 << 1;
var PFLAG_LAYOUT_REQUIRED = 1 << 2;
var View = (function (_super) {
    __extends(View, _super);
    function View() {
        _super.call(this);
        this._hasTransfrom = false;
        this._suspendCATransaction = false;
        this._privateFlags = PFLAG_LAYOUT_REQUIRED | PFLAG_FORCE_LAYOUT;
    }
    View.prototype._addViewCore = function (view, atIndex) {
        _super.prototype._addViewCore.call(this, view, atIndex);
        this.requestLayout();
    };
    View.prototype._removeViewCore = function (view) {
        _super.prototype._removeViewCore.call(this, view);
        view._onDetached();
        this.requestLayout();
    };
    Object.defineProperty(View.prototype, "_nativeView", {
        get: function () {
            return this.ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View.prototype, "isLayoutRequired", {
        get: function () {
            return (this._privateFlags & PFLAG_LAYOUT_REQUIRED) === PFLAG_LAYOUT_REQUIRED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(View.prototype, "isLayoutRequested", {
        get: function () {
            return (this._privateFlags & PFLAG_FORCE_LAYOUT) === PFLAG_FORCE_LAYOUT;
        },
        enumerable: true,
        configurable: true
    });
    View.prototype.requestLayout = function () {
        _super.prototype.requestLayout.call(this);
        this._privateFlags |= PFLAG_FORCE_LAYOUT;
        var parent = this.parent;
        if (parent && !parent.isLayoutRequested) {
            parent.requestLayout();
        }
    };
    View.prototype.measure = function (widthMeasureSpec, heightMeasureSpec) {
        var measureSpecsChanged = this._setCurrentMeasureSpecs(widthMeasureSpec, heightMeasureSpec);
        var forceLayout = (this._privateFlags & PFLAG_FORCE_LAYOUT) === PFLAG_FORCE_LAYOUT;
        if (forceLayout || measureSpecsChanged) {
            this._privateFlags &= ~PFLAG_MEASURED_DIMENSION_SET;
            this.onMeasure(widthMeasureSpec, heightMeasureSpec);
            this._privateFlags |= PFLAG_LAYOUT_REQUIRED;
            if ((this._privateFlags & PFLAG_MEASURED_DIMENSION_SET) !== PFLAG_MEASURED_DIMENSION_SET) {
                throw new Error("onMeasure() did not set the measured dimension by calling setMeasuredDimension() " + this);
            }
        }
    };
    View.prototype.layout = function (left, top, right, bottom) {
        var _a = this._setCurrentLayoutBounds(left, top, right, bottom), boundsChanged = _a.boundsChanged, sizeChanged = _a.sizeChanged;
        this.layoutNativeView(left, top, right, bottom);
        if (boundsChanged || (this._privateFlags & PFLAG_LAYOUT_REQUIRED) === PFLAG_LAYOUT_REQUIRED) {
            this.onLayout(left, top, right, bottom);
            this._privateFlags &= ~PFLAG_LAYOUT_REQUIRED;
        }
        if (sizeChanged) {
            this._onSizeChanged();
        }
        this._privateFlags &= ~PFLAG_FORCE_LAYOUT;
    };
    View.prototype.setMeasuredDimension = function (measuredWidth, measuredHeight) {
        _super.prototype.setMeasuredDimension.call(this, measuredWidth, measuredHeight);
        this._privateFlags |= PFLAG_MEASURED_DIMENSION_SET;
    };
    View.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var view = this._nativeView;
        var nativeWidth = 0;
        var nativeHeight = 0;
        if (view) {
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
            var nativeSize = view.sizeThatFits(CGSizeMake(width, height));
            nativeWidth = nativeSize.width;
            nativeHeight = nativeSize.height;
        }
        var measureWidth = Math.max(nativeWidth, this.minWidth);
        var measureHeight = Math.max(nativeHeight, this.minHeight);
        var widthAndState = View.resolveSizeAndState(measureWidth, width, widthMode, 0);
        var heightAndState = View.resolveSizeAndState(measureHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    View.prototype.onLayout = function (left, top, right, bottom) {
    };
    View.prototype._setNativeViewFrame = function (nativeView, frame) {
        if (!CGRectEqualToRect(nativeView.frame, frame)) {
            if (trace.enabled) {
                trace.write(this + ", Native setFrame: = " + NSStringFromCGRect(frame), trace.categories.Layout);
            }
            this._cachedFrame = frame;
            if (this._hasTransfrom) {
                var transform = nativeView.transform;
                nativeView.transform = CGAffineTransformIdentity;
                nativeView.frame = frame;
                nativeView.transform = transform;
            }
            else {
                nativeView.frame = frame;
            }
            var boundsOrigin = nativeView.bounds.origin;
            nativeView.bounds = CGRectMake(boundsOrigin.x, boundsOrigin.y, frame.size.width, frame.size.height);
        }
    };
    View.prototype.layoutNativeView = function (left, top, right, bottom) {
        if (!this._nativeView) {
            return;
        }
        var nativeView;
        if (!this.parent && this._nativeView.subviews.count > 0 && utils.ios.MajorVersion < 8) {
            if (trace.enabled) {
                trace.write(this + " has no parent. Setting frame to first child instead.", trace.categories.Layout);
            }
            nativeView = this._nativeView.subviews[0];
        }
        else {
            nativeView = this._nativeView;
        }
        var frame = CGRectMake(left, top, right - left, bottom - top);
        this._setNativeViewFrame(nativeView, frame);
    };
    View.prototype._updateLayout = function () {
        var oldBounds = this._getCurrentLayoutBounds();
        this.layoutNativeView(oldBounds.left, oldBounds.top, oldBounds.right, oldBounds.bottom);
    };
    View.prototype.focus = function () {
        if (this.ios) {
            return this.ios.becomeFirstResponder();
        }
        return false;
    };
    View.prototype.getLocationInWindow = function () {
        if (!this._nativeView || !this._nativeView.window) {
            return undefined;
        }
        var pointInWindow = this._nativeView.convertPointToView(this._nativeView.bounds.origin, null);
        return {
            x: utils.layout.toDeviceIndependentPixels(pointInWindow.x),
            y: utils.layout.toDeviceIndependentPixels(pointInWindow.y),
        };
    };
    View.prototype.getLocationOnScreen = function () {
        if (!this._nativeView || !this._nativeView.window) {
            return undefined;
        }
        var pointInWindow = this._nativeView.convertPointToView(this._nativeView.bounds.origin, null);
        var pointOnScreen = this._nativeView.window.convertPointToWindow(pointInWindow, null);
        return {
            x: utils.layout.toDeviceIndependentPixels(pointOnScreen.x),
            y: utils.layout.toDeviceIndependentPixels(pointOnScreen.y),
        };
    };
    View.prototype.getLocationRelativeTo = function (otherView) {
        if (!this._nativeView || !this._nativeView.window ||
            !otherView._nativeView || !otherView._nativeView.window ||
            this._nativeView.window !== otherView._nativeView.window) {
            return undefined;
        }
        var myPointInWindow = this._nativeView.convertPointToView(this._nativeView.bounds.origin, null);
        var otherPointInWindow = otherView._nativeView.convertPointToView(otherView._nativeView.bounds.origin, null);
        return {
            x: utils.layout.toDeviceIndependentPixels(myPointInWindow.x - otherPointInWindow.x),
            y: utils.layout.toDeviceIndependentPixels(myPointInWindow.y - otherPointInWindow.y),
        };
    };
    View.prototype._onSizeChanged = function () {
        this.style._sizeChanged();
    };
    View.prototype._updateNativeTransform = function () {
        var translateX = this.translateX || 0;
        var translateY = this.translateY || 0;
        var scaleX = this.scaleX || 1;
        var scaleY = this.scaleY || 1;
        var rotate = this.rotate || 0;
        var newTransform = CGAffineTransformIdentity;
        newTransform = CGAffineTransformTranslate(newTransform, translateX, translateY);
        newTransform = CGAffineTransformRotate(newTransform, rotate * Math.PI / 180);
        newTransform = CGAffineTransformScale(newTransform, scaleX === 0 ? 0.001 : scaleX, scaleY === 0 ? 0.001 : scaleY);
        if (!CGAffineTransformEqualToTransform(this._nativeView.transform, newTransform)) {
            this._nativeView.transform = newTransform;
            this._hasTransfrom = this._nativeView && !CGAffineTransformEqualToTransform(this._nativeView.transform, CGAffineTransformIdentity);
        }
    };
    View.prototype._updateOriginPoint = function () {
        var newPoint = CGPointMake(this.originX, this.originY);
        this._nativeView.layer.anchorPoint = newPoint;
        if (this._cachedFrame) {
            this._setNativeViewFrame(this._nativeView, this._cachedFrame);
        }
    };
    View.prototype._addToSuperview = function (superview, atIndex) {
        if (superview && this._nativeView) {
            if (types.isNullOrUndefined(atIndex) || atIndex >= superview.subviews.count) {
                superview.addSubview(this._nativeView);
            }
            else {
                superview.insertSubviewAtIndex(this._nativeView, atIndex);
            }
            return true;
        }
        return false;
    };
    View.prototype._removeFromSuperview = function () {
        if (this._nativeView) {
            this._nativeView.removeFromSuperview();
        }
    };
    View.prototype._suspendPresentationLayerUpdates = function () {
        this._suspendCATransaction = true;
    };
    View.prototype._resumePresentationLayerUpdates = function () {
        this._suspendCATransaction = false;
    };
    View.prototype._isPresentationLayerUpdateSuspeneded = function () {
        return this._suspendCATransaction;
    };
    return View;
}(viewCommon.View));
exports.View = View;
var CustomLayoutView = (function (_super) {
    __extends(CustomLayoutView, _super);
    function CustomLayoutView() {
        _super.call(this);
        this._view = new UIView();
    }
    Object.defineProperty(CustomLayoutView.prototype, "ios", {
        get: function () {
            return this._view;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomLayoutView.prototype, "_nativeView", {
        get: function () {
            return this._view;
        },
        enumerable: true,
        configurable: true
    });
    CustomLayoutView.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
    };
    CustomLayoutView.prototype._addViewToNativeVisualTree = function (child, atIndex) {
        _super.prototype._addViewToNativeVisualTree.call(this, child, atIndex);
        return child._addToSuperview(this._nativeView, atIndex);
    };
    CustomLayoutView.prototype._removeViewFromNativeVisualTree = function (child) {
        _super.prototype._removeViewFromNativeVisualTree.call(this, child);
        child._removeFromSuperview();
    };
    return CustomLayoutView;
}(View));
exports.CustomLayoutView = CustomLayoutView;
var ViewStyler = (function () {
    function ViewStyler() {
    }
    ViewStyler.setBackgroundInternalProperty = function (view, newValue) {
        var nativeView = view._nativeView;
        if (nativeView) {
            ensureBackground();
            var updateSuspended = view._isPresentationLayerUpdateSuspeneded();
            if (!updateSuspended) {
                CATransaction.begin();
            }
            nativeView.backgroundColor = background.ios.createBackgroundUIColor(view);
            if (!updateSuspended) {
                CATransaction.commit();
            }
        }
    };
    ViewStyler.resetBackgroundInternalProperty = function (view, nativeValue) {
        var nativeView = view._nativeView;
        if (nativeView) {
            nativeView.backgroundColor = nativeValue;
        }
    };
    ViewStyler.getNativeBackgroundInternalValue = function (view) {
        var nativeView = view._nativeView;
        if (nativeView) {
            return nativeView.backgroundColor;
        }
        return undefined;
    };
    ViewStyler.setVisibilityProperty = function (view, newValue) {
        var nativeView = view._nativeView;
        if (nativeView) {
            return nativeView.hidden = (newValue !== enums.Visibility.visible);
        }
    };
    ViewStyler.resetVisibilityProperty = function (view, nativeValue) {
        var nativeView = view._nativeView;
        if (nativeView) {
            return nativeView.hidden = false;
        }
    };
    ViewStyler.setOpacityProperty = function (view, newValue) {
        var nativeView = view._nativeView;
        if (nativeView) {
            var updateSuspended = view._isPresentationLayerUpdateSuspeneded();
            if (!updateSuspended) {
                CATransaction.begin();
            }
            var alpha = nativeView.alpha = newValue;
            if (!updateSuspended) {
                CATransaction.commit();
            }
            return alpha;
        }
    };
    ViewStyler.resetOpacityProperty = function (view, nativeValue) {
        var nativeView = view._nativeView;
        if (nativeView) {
            return nativeView.alpha = 1.0;
        }
    };
    ViewStyler.setBorderWidthProperty = function (view, newValue) {
        if (view._nativeView instanceof UIView) {
            view._nativeView.layer.borderWidth = newValue;
        }
    };
    ViewStyler.resetBorderWidthProperty = function (view, nativeValue) {
        if (view._nativeView instanceof UIView) {
            view._nativeView.layer.borderWidth = nativeValue;
        }
    };
    ViewStyler.getBorderWidthProperty = function (view) {
        if (view._nativeView instanceof UIView) {
            return view._nativeView.layer.borderWidth;
        }
        return 0;
    };
    ViewStyler.setBorderColorProperty = function (view, newValue) {
        if (view._nativeView instanceof UIView && newValue instanceof UIColor) {
            view._nativeView.layer.borderColor = newValue.CGColor;
        }
    };
    ViewStyler.resetBorderColorProperty = function (view, nativeValue) {
        if (view._nativeView instanceof UIView && nativeValue instanceof UIColor) {
            view._nativeView.layer.borderColor = nativeValue;
        }
    };
    ViewStyler.getBorderColorProperty = function (view) {
        if (view._nativeView instanceof UIView) {
            return view._nativeView.layer.borderColor;
        }
        return undefined;
    };
    ViewStyler.setBorderRadiusProperty = function (view, newValue) {
        if (view._nativeView instanceof UIView) {
            view._nativeView.layer.cornerRadius = newValue;
            view._nativeView.clipsToBounds = true;
        }
    };
    ViewStyler.resetBorderRadiusProperty = function (view, nativeValue) {
        if (view._nativeView instanceof UIView) {
            view._nativeView.layer.cornerRadius = nativeValue;
        }
    };
    ViewStyler.getBorderRadiusProperty = function (view) {
        if (view._nativeView instanceof UIView) {
            return view._nativeView.layer.cornerRadius;
        }
        return 0;
    };
    ViewStyler.setRotateProperty = function (view, newValue) {
        view._updateNativeTransform();
    };
    ViewStyler.resetRotateProperty = function (view, nativeValue) {
        view._updateNativeTransform();
    };
    ViewStyler.getRotateProperty = function (view) {
        if (view._nativeView instanceof UIView) {
            var t = view._nativeView.transform;
            return Math.atan2(t.b, t.a);
        }
        return 0;
    };
    ViewStyler.setScaleXProperty = function (view, newValue) {
        view._updateNativeTransform();
    };
    ViewStyler.resetScaleXProperty = function (view, nativeValue) {
        view._updateNativeTransform();
    };
    ViewStyler.getScaleXProperty = function (view) {
        if (view._nativeView instanceof UIView) {
            var t = view._nativeView.transform;
            return Math.sqrt(t.a * t.a + t.c * t.c);
        }
        return 0;
    };
    ViewStyler.setScaleYProperty = function (view, newValue) {
        view._updateNativeTransform();
    };
    ViewStyler.resetScaleYProperty = function (view, nativeValue) {
        view._updateNativeTransform();
    };
    ViewStyler.getScaleYProperty = function (view) {
        if (view._nativeView instanceof UIView) {
            var t = view._nativeView.transform;
            return Math.sqrt(t.b * t.b + t.d * t.d);
        }
        return 0;
    };
    ViewStyler.setTranslateXProperty = function (view, newValue) {
        view._updateNativeTransform();
    };
    ViewStyler.resetTranslateXProperty = function (view, nativeValue) {
        view._updateNativeTransform();
    };
    ViewStyler.getTranslateXProperty = function (view) {
        if (view._nativeView instanceof UIView) {
            var t = view._nativeView.transform;
            return t.tx;
        }
        return 0;
    };
    ViewStyler.setTranslateYProperty = function (view, newValue) {
        view._updateNativeTransform();
    };
    ViewStyler.resetTranslateYProperty = function (view, nativeValue) {
        view._updateNativeTransform();
    };
    ViewStyler.getTranslateYProperty = function (view) {
        if (view._nativeView instanceof UIView) {
            var t = view._nativeView.transform;
            return t.ty;
        }
        return 0;
    };
    ViewStyler.setZIndexProperty = function (view, newValue) {
        view.ios.layer.zPosition = newValue;
    };
    ViewStyler.resetZIndexProperty = function (view, nativeValue) {
        view.ios.layer.zPosition = nativeValue;
    };
    ViewStyler.getZIndexProperty = function (view) {
        return view.ios.layer.zPosition;
    };
    ViewStyler.setClipPathProperty = function (view, newValue) {
        var nativeView = view._nativeView;
        if (nativeView) {
            ensureBackground();
            var updateSuspended = view._isPresentationLayerUpdateSuspeneded();
            if (!updateSuspended) {
                CATransaction.begin();
            }
            nativeView.backgroundColor = background.ios.createBackgroundUIColor(view);
            if (!updateSuspended) {
                CATransaction.commit();
            }
        }
    };
    ViewStyler.resetClipPathProperty = function (view, nativeValue) {
        var nativeView = view._nativeView;
        if (nativeView) {
        }
    };
    ViewStyler.registerHandlers = function () {
        style.registerHandler(style.backgroundInternalProperty, new style.StylePropertyChangedHandler(ViewStyler.setBackgroundInternalProperty, ViewStyler.resetBackgroundInternalProperty, ViewStyler.getNativeBackgroundInternalValue));
        style.registerHandler(style.clipPathProperty, new style.StylePropertyChangedHandler(ViewStyler.setClipPathProperty, ViewStyler.resetClipPathProperty));
        style.registerHandler(style.visibilityProperty, new style.StylePropertyChangedHandler(ViewStyler.setVisibilityProperty, ViewStyler.resetVisibilityProperty));
        style.registerHandler(style.opacityProperty, new style.StylePropertyChangedHandler(ViewStyler.setOpacityProperty, ViewStyler.resetOpacityProperty));
        style.registerHandler(style.borderWidthProperty, new style.StylePropertyChangedHandler(ViewStyler.setBorderWidthProperty, ViewStyler.resetBorderWidthProperty, ViewStyler.getBorderWidthProperty));
        style.registerHandler(style.borderColorProperty, new style.StylePropertyChangedHandler(ViewStyler.setBorderColorProperty, ViewStyler.resetBorderColorProperty, ViewStyler.getBorderColorProperty));
        style.registerHandler(style.borderRadiusProperty, new style.StylePropertyChangedHandler(ViewStyler.setBorderRadiusProperty, ViewStyler.resetBorderRadiusProperty, ViewStyler.getBorderRadiusProperty));
        style.registerHandler(style.rotateProperty, new style.StylePropertyChangedHandler(ViewStyler.setRotateProperty, ViewStyler.resetRotateProperty, ViewStyler.getRotateProperty));
        style.registerHandler(style.scaleXProperty, new style.StylePropertyChangedHandler(ViewStyler.setScaleXProperty, ViewStyler.resetScaleXProperty, ViewStyler.getScaleXProperty));
        style.registerHandler(style.scaleYProperty, new style.StylePropertyChangedHandler(ViewStyler.setScaleYProperty, ViewStyler.resetScaleYProperty, ViewStyler.getScaleYProperty));
        style.registerHandler(style.translateXProperty, new style.StylePropertyChangedHandler(ViewStyler.setTranslateXProperty, ViewStyler.resetTranslateXProperty, ViewStyler.getTranslateXProperty));
        style.registerHandler(style.translateYProperty, new style.StylePropertyChangedHandler(ViewStyler.setTranslateYProperty, ViewStyler.resetTranslateYProperty, ViewStyler.getTranslateYProperty));
        style.registerHandler(style.zIndexProperty, new style.StylePropertyChangedHandler(ViewStyler.setZIndexProperty, ViewStyler.resetZIndexProperty, ViewStyler.getZIndexProperty));
    };
    return ViewStyler;
}());
exports.ViewStyler = ViewStyler;
ViewStyler.registerHandlers();
