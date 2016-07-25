var common = require("./tab-view-common");
var trace = require("trace");
var utils = require("utils/utils");
var view = require("ui/core/view");
var types = require("utils/types");
var color = require("color");
var style = require("ui/styling/style");
global.moduleMerge(common, exports);
var imageSource;
function ensureImageSource() {
    if (!imageSource) {
        imageSource = require("image-source");
    }
}
var UITabBarControllerImpl = (function (_super) {
    __extends(UITabBarControllerImpl, _super);
    function UITabBarControllerImpl() {
        _super.apply(this, arguments);
    }
    UITabBarControllerImpl.initWithOwner = function (owner) {
        var handler = UITabBarControllerImpl.new();
        handler._owner = owner;
        return handler;
    };
    UITabBarControllerImpl.prototype.viewDidLayoutSubviews = function () {
        if (trace.enabled) {
            trace.write("TabView.UITabBarControllerClass.viewDidLayoutSubviews();", trace.categories.Debug);
        }
        _super.prototype.viewDidLayoutSubviews.call(this);
        var owner = this._owner.get();
        if (owner && owner.isLoaded) {
            owner._updateLayout();
        }
    };
    return UITabBarControllerImpl;
}(UITabBarController));
var UITabBarControllerDelegateImpl = (function (_super) {
    __extends(UITabBarControllerDelegateImpl, _super);
    function UITabBarControllerDelegateImpl() {
        _super.apply(this, arguments);
    }
    UITabBarControllerDelegateImpl.initWithOwner = function (owner) {
        var delegate = UITabBarControllerDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    };
    UITabBarControllerDelegateImpl.prototype.tabBarControllerDidSelectViewController = function (tabBarController, viewController) {
        if (trace.enabled) {
            trace.write("TabView.UITabBarControllerDelegateClass.tabBarControllerDidSelectViewController(" + tabBarController + ", " + viewController + ");", trace.categories.Debug);
        }
        var owner = this._owner.get();
        if (owner) {
            owner._onViewControllerShown(viewController);
        }
    };
    UITabBarControllerDelegateImpl.ObjCProtocols = [UITabBarControllerDelegate];
    return UITabBarControllerDelegateImpl;
}(NSObject));
var UINavigationControllerDelegateImpl = (function (_super) {
    __extends(UINavigationControllerDelegateImpl, _super);
    function UINavigationControllerDelegateImpl() {
        _super.apply(this, arguments);
    }
    UINavigationControllerDelegateImpl.initWithOwner = function (owner) {
        var delegate = UINavigationControllerDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    };
    UINavigationControllerDelegateImpl.prototype.navigationControllerDidShowViewControllerAnimated = function (navigationController, viewController, animated) {
        if (trace.enabled) {
            trace.write("TabView.UINavigationControllerDelegateClass.navigationControllerDidShowViewControllerAnimated(" + navigationController + ", " + viewController + ", " + animated + ");", trace.categories.Debug);
        }
        navigationController.navigationBar.topItem.rightBarButtonItem = null;
        var owner = this._owner.get();
        if (owner) {
            owner._onViewControllerShown(viewController);
        }
    };
    UINavigationControllerDelegateImpl.ObjCProtocols = [UINavigationControllerDelegate];
    return UINavigationControllerDelegateImpl;
}(NSObject));
var TabViewItem = (function (_super) {
    __extends(TabViewItem, _super);
    function TabViewItem() {
        _super.apply(this, arguments);
    }
    TabViewItem.prototype._update = function () {
        if (this._parent && this._controller) {
            var icon = this._parent._getIcon(this.iconSource);
            var tabBarItem = UITabBarItem.alloc().initWithTitleImageTag((this.title || ""), icon, this._parent.items.indexOf(this));
            if (!icon) {
                if (types.isFunction(tabBarItem.setTitlePositionAdjustment)) {
                    tabBarItem.setTitlePositionAdjustment({ horizontal: 0, vertical: -20 });
                }
                else {
                    tabBarItem.titlePositionAdjustment = { horizontal: 0, vertical: -20 };
                }
            }
            var states = getTitleAttributesForStates(this._parent);
            tabBarItem.setTitleTextAttributesForState(states.normalState, UIControlState.UIControlStateNormal);
            tabBarItem.setTitleTextAttributesForState(states.selectedState, UIControlState.UIControlStateSelected);
            this._controller.tabBarItem = tabBarItem;
        }
    };
    return TabViewItem;
}(common.TabViewItem));
exports.TabViewItem = TabViewItem;
function selectedColorPropertyChanged(data) {
    var tabView = data.object;
    tabView._updateIOSTabBarColorsAndFonts();
}
common.TabView.selectedColorProperty.metadata.onSetNativeValue = selectedColorPropertyChanged;
function tabsBackgroundColorPropertyChanged(data) {
    var tabView = data.object;
    if (data.newValue instanceof color.Color) {
        tabView.ios.tabBar.barTintColor = data.newValue.ios;
    }
}
common.TabView.tabsBackgroundColorProperty.metadata.onSetNativeValue = tabsBackgroundColorPropertyChanged;
var TabView = (function (_super) {
    __extends(TabView, _super);
    function TabView() {
        _super.call(this);
        this._tabBarHeight = 0;
        this._navBarHeight = 0;
        this._iconsCache = {};
        this._ios = UITabBarControllerImpl.initWithOwner(new WeakRef(this));
        this._delegate = UITabBarControllerDelegateImpl.initWithOwner(new WeakRef(this));
        this._moreNavigationControllerDelegate = UINavigationControllerDelegateImpl.initWithOwner(new WeakRef(this));
    }
    TabView.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.delegate = this._delegate;
    };
    TabView.prototype.onUnloaded = function () {
        this._ios.delegate = null;
        this._ios.moreNavigationController.delegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    Object.defineProperty(TabView.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabView.prototype, "_nativeView", {
        get: function () {
            return this._ios.view;
        },
        enumerable: true,
        configurable: true
    });
    TabView.prototype._onViewControllerShown = function (viewController) {
        if (trace.enabled) {
            trace.write("TabView._onViewControllerShown(" + viewController + ");", trace.categories.Debug);
        }
        if (this._ios.viewControllers.containsObject(viewController)) {
            this.selectedIndex = this._ios.viewControllers.indexOfObject(viewController);
            ;
        }
        else {
            if (trace.enabled) {
                trace.write("TabView._onViewControllerShown: viewController is not one of our viewControllers", trace.categories.Debug);
            }
        }
    };
    TabView.prototype._removeTabs = function (oldItems) {
        if (trace.enabled) {
            trace.write("TabView._removeTabs(" + oldItems + ");", trace.categories.Debug);
        }
        _super.prototype._removeTabs.call(this, oldItems);
        var i;
        var length = oldItems.length;
        var oldItem;
        for (i = 0; i < length; i++) {
            oldItem = oldItems[i];
            oldItem._parent = null;
            oldItem._controller = null;
        }
        this._ios.viewControllers = null;
    };
    TabView.prototype._addTabs = function (newItems) {
        if (trace.enabled) {
            trace.write("TabView._addTabs(" + newItems + ");", trace.categories.Debug);
        }
        _super.prototype._addTabs.call(this, newItems);
        var i;
        var length = newItems.length;
        var item;
        var newControllers = NSMutableArray.alloc().initWithCapacity(length);
        var newController;
        var states = getTitleAttributesForStates(this);
        for (i = 0; i < length; i++) {
            item = newItems[i];
            if (item.view.ios instanceof UIViewController) {
                newController = item.view.ios;
            }
            else {
                newController = new UIViewController();
                newController.view.addSubview(item.view.ios);
            }
            item._parent = this;
            item._controller = newController;
            var icon = this._getIcon(item.iconSource);
            var tabBarItem = UITabBarItem.alloc().initWithTitleImageTag((item.title || ""), icon, i);
            if (!icon) {
                if (types.isFunction(tabBarItem.setTitlePositionAdjustment)) {
                    tabBarItem.setTitlePositionAdjustment({ horizontal: 0, vertical: -20 });
                }
                else {
                    tabBarItem.titlePositionAdjustment = { horizontal: 0, vertical: -20 };
                }
            }
            tabBarItem.setTitleTextAttributesForState(states.normalState, UIControlState.UIControlStateNormal);
            tabBarItem.setTitleTextAttributesForState(states.selectedState, UIControlState.UIControlStateSelected);
            newController.tabBarItem = tabBarItem;
            newControllers.addObject(newController);
        }
        this._ios.viewControllers = newControllers;
        this._ios.customizableViewControllers = null;
        this._ios.moreNavigationController.delegate = this._moreNavigationControllerDelegate;
        if (this._ios.selectedIndex !== this.selectedIndex) {
            this._ios.selectedIndex = this.selectedIndex;
        }
    };
    TabView.prototype._getIcon = function (iconSource) {
        if (!iconSource) {
            return null;
        }
        var image;
        image = this._iconsCache[iconSource];
        if (!image) {
            ensureImageSource();
            var is = imageSource.fromFileOrResource(iconSource);
            if (is && is.ios) {
                var originalRenderedImage = is.ios.imageWithRenderingMode(UIImageRenderingMode.UIImageRenderingModeAlwaysOriginal);
                this._iconsCache[iconSource] = originalRenderedImage;
                image = originalRenderedImage;
            }
        }
        return image;
    };
    TabView.prototype._onSelectedIndexPropertyChangedSetNativeValue = function (data) {
        _super.prototype._onSelectedIndexPropertyChangedSetNativeValue.call(this, data);
        var newIndex = data.newValue;
        if (trace.enabled) {
            trace.write("TabView._onSelectedIndexPropertyChangedSetNativeValue(" + newIndex + ")", trace.categories.Debug);
        }
        if (types.isNullOrUndefined(newIndex)) {
            return;
        }
        this._ios.selectedIndex = data.newValue;
        this.requestLayout();
        var args = { eventName: TabView.selectedIndexChangedEvent, object: this, oldIndex: data.oldValue, newIndex: data.newValue };
        this.notify(args);
    };
    TabView.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var nativeView = this._nativeView;
        if (nativeView) {
            var width = utils.layout.getMeasureSpecSize(widthMeasureSpec);
            var widthMode = utils.layout.getMeasureSpecMode(widthMeasureSpec);
            var height = utils.layout.getMeasureSpecSize(heightMeasureSpec);
            var heightMode = utils.layout.getMeasureSpecMode(heightMeasureSpec);
            this._tabBarHeight = TabView.measureHelper(this._ios.tabBar, width, widthMode, height, heightMode).height;
            var moreNavBarVisible = !!this._ios.moreNavigationController.navigationBar.window;
            this._navBarHeight = moreNavBarVisible ? TabView.measureHelper(this._ios.moreNavigationController.navigationBar, width, widthMode, height, heightMode).height : 0;
            var density = utils.layout.getDisplayDensity();
            var measureWidth = 0;
            var measureHeight = 0;
            var child = this._selectedView;
            if (child) {
                var childHeightMeasureSpec = utils.layout.makeMeasureSpec(height - this._navBarHeight - this._tabBarHeight, heightMode);
                var childSize = view.View.measureChild(this, child, widthMeasureSpec, childHeightMeasureSpec);
                measureHeight = childSize.measuredHeight;
                measureWidth = childSize.measuredWidth;
            }
            measureWidth = Math.max(measureWidth, this.minWidth * density);
            measureHeight = Math.max(measureHeight, this.minHeight * density);
            var widthAndState = view.View.resolveSizeAndState(measureWidth, width, widthMode, 0);
            var heightAndState = view.View.resolveSizeAndState(measureHeight, height, heightMode, 0);
            this.setMeasuredDimension(widthAndState, heightAndState);
        }
    };
    TabView.prototype.onLayout = function (left, top, right, bottom) {
        _super.prototype.onLayout.call(this, left, top, right, bottom);
        var child = this._selectedView;
        if (child) {
            view.View.layoutChild(this, child, 0, this._navBarHeight, right, (bottom - this._navBarHeight - this._tabBarHeight));
        }
    };
    TabView.measureHelper = function (nativeView, width, widthMode, height, heightMode) {
        return nativeView.sizeThatFits(CGSizeMake((widthMode === utils.layout.UNSPECIFIED) ? Number.POSITIVE_INFINITY : width, (heightMode === utils.layout.UNSPECIFIED) ? Number.POSITIVE_INFINITY : height));
    };
    TabView.prototype._updateIOSTabBarColorsAndFonts = function () {
        if (!this.items) {
            return;
        }
        var tabBar = this.ios.tabBar;
        tabBar.tintColor = this.selectedColor ? this.selectedColor.ios : null;
        var states = getTitleAttributesForStates(this);
        for (var i = 0; i < tabBar.items.count; i++) {
            var item = tabBar.items[i];
            item.setTitleTextAttributesForState(states.normalState, UIControlState.UIControlStateNormal);
            item.setTitleTextAttributesForState(states.selectedState, UIControlState.UIControlStateSelected);
        }
    };
    return TabView;
}(common.TabView));
exports.TabView = TabView;
function getTitleAttributesForStates(tabView) {
    var normalState = {};
    if (tabView.color instanceof color.Color) {
        normalState[UITextAttributeTextColor] = tabView.color.ios;
    }
    var selectedState = {};
    if (tabView.selectedColor instanceof color.Color) {
        selectedState[UITextAttributeTextColor] = tabView.selectedColor.ios;
    }
    else {
        selectedState[UITextAttributeTextColor] = tabView.ios.tabBar.tintColor;
    }
    var defaultFont = UIFont.systemFontOfSize(10);
    var font = tabView.style._fontInternal.getUIFont(defaultFont);
    normalState[NSFontAttributeName] = font;
    selectedState[NSFontAttributeName] = font;
    return {
        normalState: normalState,
        selectedState: selectedState
    };
}
var TabViewStyler = (function () {
    function TabViewStyler() {
    }
    TabViewStyler.setColorProperty = function (v, newValue) {
        var tab = v;
        tab._updateIOSTabBarColorsAndFonts();
    };
    TabViewStyler.resetColorProperty = function (v, nativeValue) {
        var tab = v;
        tab._updateIOSTabBarColorsAndFonts();
    };
    TabViewStyler.setFontInternalProperty = function (v, newValue, nativeValue) {
        var tab = v;
        tab._updateIOSTabBarColorsAndFonts();
    };
    TabViewStyler.resetFontInternalProperty = function (v, nativeValue) {
        var tab = v;
        tab._updateIOSTabBarColorsAndFonts();
    };
    TabViewStyler.getNativeFontValue = function (v) {
        var tab = v;
        var currentFont;
        if (tab.ios && tab.ios.items && tab.ios.items.length > 0) {
            var currentAttrs = tab.ios.items[0].titleTextAttributesForState(UIControlState.UIControlStateNormal);
            if (currentAttrs) {
                currentFont = currentAttrs.objectForKey(NSFontAttributeName);
            }
        }
        if (!currentFont) {
            currentFont = UIFont.systemFontOfSize(UIFont.labelFontSize());
        }
        return currentFont;
    };
    TabViewStyler.registerHandlers = function () {
        style.registerHandler(style.colorProperty, new style.StylePropertyChangedHandler(TabViewStyler.setColorProperty, TabViewStyler.resetColorProperty), "TabView");
        style.registerHandler(style.fontInternalProperty, new style.StylePropertyChangedHandler(TabViewStyler.setFontInternalProperty, TabViewStyler.resetFontInternalProperty, TabViewStyler.getNativeFontValue), "TabView");
    };
    return TabViewStyler;
}());
exports.TabViewStyler = TabViewStyler;
TabViewStyler.registerHandlers();
