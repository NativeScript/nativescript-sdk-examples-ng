var common = require("./action-bar-common");
var imageSource = require("image-source");
var frameModule = require("ui/frame");
var enums = require("ui/enums");
var view = require("ui/core/view");
var utils = require("utils/utils");
var types = require("utils/types");
var style = require("ui/styling/style");
var frame = require("ui/frame");
global.moduleMerge(common, exports);
var ActionItem = (function (_super) {
    __extends(ActionItem, _super);
    function ActionItem() {
        _super.apply(this, arguments);
        this._ios = {
            position: enums.IOSActionItemPosition.left,
            systemIcon: undefined
        };
    }
    Object.defineProperty(ActionItem.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        set: function (value) {
            throw new Error("ActionItem.android is read-only");
        },
        enumerable: true,
        configurable: true
    });
    return ActionItem;
}(common.ActionItem));
exports.ActionItem = ActionItem;
var NavigationButton = (function (_super) {
    __extends(NavigationButton, _super);
    function NavigationButton() {
        _super.apply(this, arguments);
    }
    return NavigationButton;
}(ActionItem));
exports.NavigationButton = NavigationButton;
var ActionBar = (function (_super) {
    __extends(ActionBar, _super);
    function ActionBar() {
        _super.apply(this, arguments);
        this._navigationBarHeight = 0;
    }
    Object.defineProperty(ActionBar.prototype, "ios", {
        get: function () {
            if (!(this.page && this.page.parent)) {
                return;
            }
            var viewController = this.page.ios;
            if (viewController.navigationController !== null) {
                return viewController.navigationController.navigationBar;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    ActionBar.prototype.update = function () {
        if (!(this.page && this.page.parent)) {
            return;
        }
        var viewController = this.page.ios;
        var navigationItem = viewController.navigationItem;
        var navController = frameModule.topmost().ios.controller;
        var navigationBar = navController ? navController.navigationBar : null;
        var previousController;
        navigationItem.title = this.title;
        if (this.titleView && this.titleView.ios) {
            navigationItem.titleView = this.titleView.ios;
        }
        var indexOfViewController = navController.viewControllers.indexOfObject(viewController);
        if (indexOfViewController < navController.viewControllers.count && indexOfViewController > 0) {
            previousController = navController.viewControllers[indexOfViewController - 1];
        }
        if (previousController) {
            if (this.navigationButton) {
                var tapHandler = TapBarItemHandlerImpl.initWithOwner(new WeakRef(this.navigationButton));
                var barButtonItem = UIBarButtonItem.alloc().initWithTitleStyleTargetAction(this.navigationButton.text + "", UIBarButtonItemStyle.UIBarButtonItemStylePlain, tapHandler, "tap");
                previousController.navigationItem.backBarButtonItem = barButtonItem;
            }
            else {
                previousController.navigationItem.backBarButtonItem = null;
            }
        }
        var img;
        if (this.navigationButton && common.isVisible(this.navigationButton) && this.navigationButton.icon) {
            img = imageSource.fromFileOrResource(this.navigationButton.icon);
        }
        if (img && img.ios) {
            var image = img.ios.imageWithRenderingMode(UIImageRenderingMode.UIImageRenderingModeAlwaysOriginal);
            navigationBar.backIndicatorImage = image;
            navigationBar.backIndicatorTransitionMaskImage = image;
        }
        else {
            navigationBar.backIndicatorImage = null;
            navigationBar.backIndicatorTransitionMaskImage = null;
        }
        if (this.navigationButton) {
            navigationItem.setHidesBackButtonAnimated(!common.isVisible(this.navigationButton), true);
        }
        this.populateMenuItems(navigationItem);
        this.updateColors(navigationBar);
    };
    ActionBar.prototype.populateMenuItems = function (navigationItem) {
        var items = this.actionItems.getVisibleItems();
        var leftBarItems = [];
        var rightBarItems = [];
        for (var i = 0; i < items.length; i++) {
            var barButtonItem = this.createBarButtonItem(items[i]);
            if (items[i].ios.position === enums.IOSActionItemPosition.left) {
                leftBarItems.push(barButtonItem);
            }
            else {
                rightBarItems.splice(0, 0, barButtonItem);
            }
        }
        navigationItem.setLeftBarButtonItemsAnimated(leftBarItems, false);
        navigationItem.setRightBarButtonItemsAnimated(rightBarItems, false);
        if (leftBarItems.length > 0) {
            navigationItem.leftItemsSupplementBackButton = true;
        }
    };
    ActionBar.prototype.createBarButtonItem = function (item) {
        var tapHandler = TapBarItemHandlerImpl.initWithOwner(new WeakRef(item));
        item.handler = tapHandler;
        var barButtonItem;
        if (item.actionView && item.actionView.ios) {
            var recognizer = UITapGestureRecognizer.alloc().initWithTargetAction(tapHandler, "tap");
            item.actionView.ios.addGestureRecognizer(recognizer);
            barButtonItem = UIBarButtonItem.alloc().initWithCustomView(item.actionView.ios);
        }
        else if (types.isNumber(item.ios.systemIcon)) {
            barButtonItem = UIBarButtonItem.alloc().initWithBarButtonSystemItemTargetAction(item.ios.systemIcon, tapHandler, "tap");
        }
        else if (item.icon) {
            var img = imageSource.fromFileOrResource(item.icon);
            if (img && img.ios) {
                barButtonItem = UIBarButtonItem.alloc().initWithImageStyleTargetAction(img.ios, UIBarButtonItemStyle.UIBarButtonItemStylePlain, tapHandler, "tap");
            }
            else {
                throw new Error("Error loading icon from " + item.icon);
            }
        }
        else {
            barButtonItem = UIBarButtonItem.alloc().initWithTitleStyleTargetAction(item.text + "", UIBarButtonItemStyle.UIBarButtonItemStylePlain, tapHandler, "tap");
        }
        return barButtonItem;
    };
    ActionBar.prototype.updateColors = function (navBar) {
        var color = this.color;
        if (color) {
            navBar.titleTextAttributes = (_a = {}, _a[NSForegroundColorAttributeName] = color.ios, _a);
            navBar.tintColor = color.ios;
        }
        else {
            navBar.titleTextAttributes = null;
            navBar.tintColor = null;
        }
        var bgColor = this.backgroundColor;
        navBar.barTintColor = bgColor ? bgColor.ios : null;
        var _a;
    };
    ActionBar.prototype._onTitlePropertyChanged = function () {
        if (!this.page) {
            return;
        }
        if (this.page.frame) {
            this.page.frame._updateActionBar();
        }
        var navigationItem = this.page.ios.navigationItem;
        navigationItem.title = this.title;
    };
    ActionBar.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var _this = this;
        var width = utils.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = utils.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = utils.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = utils.layout.getMeasureSpecMode(heightMeasureSpec);
        var navBarWidth = 0;
        var navBarHeight = 0;
        var frame = this.page.frame;
        if (frame) {
            var navBar = frame.ios.controller.navigationBar;
            if (!navBar.hidden) {
                var navBarSize = navBar.sizeThatFits(CGSizeMake((widthMode === utils.layout.UNSPECIFIED) ? Number.POSITIVE_INFINITY : width, (heightMode === utils.layout.UNSPECIFIED) ? Number.POSITIVE_INFINITY : height));
                navBarWidth = navBarSize.width;
                navBarHeight = navBarSize.height;
            }
        }
        this._navigationBarHeight = navBarHeight;
        if (this.titleView) {
            view.View.measureChild(this, this.titleView, utils.layout.makeMeasureSpec(width, utils.layout.AT_MOST), utils.layout.makeMeasureSpec(navBarHeight, utils.layout.AT_MOST));
        }
        this.actionItems.getItems().forEach(function (actionItem) {
            if (actionItem.actionView) {
                view.View.measureChild(_this, actionItem.actionView, utils.layout.makeMeasureSpec(width, utils.layout.AT_MOST), utils.layout.makeMeasureSpec(navBarHeight, utils.layout.AT_MOST));
            }
        });
        this.setMeasuredDimension(navBarWidth, navBarHeight);
    };
    ActionBar.prototype.onLayout = function (left, top, right, bottom) {
        var _this = this;
        view.View.layoutChild(this, this.titleView, 0, 0, right - left, this._navigationBarHeight);
        this.actionItems.getItems().forEach(function (actionItem) {
            if (actionItem.actionView && actionItem.actionView.ios) {
                var measuredWidth = actionItem.actionView.getMeasuredWidth();
                var measuredHeight = actionItem.actionView.getMeasuredHeight();
                view.View.layoutChild(_this, actionItem.actionView, 0, 0, measuredWidth, measuredHeight);
            }
        });
        _super.prototype.onLayout.call(this, left, top, right, bottom);
        var navigationBar = this.ios;
        if (navigationBar) {
            navigationBar.setNeedsLayout();
        }
    };
    ActionBar.prototype.layoutNativeView = function (left, top, right, bottom) {
        return;
    };
    ActionBar.prototype._shouldApplyStyleHandlers = function () {
        var topFrame = frameModule.topmost();
        return !!topFrame;
    };
    return ActionBar;
}(common.ActionBar));
exports.ActionBar = ActionBar;
var TapBarItemHandlerImpl = (function (_super) {
    __extends(TapBarItemHandlerImpl, _super);
    function TapBarItemHandlerImpl() {
        _super.apply(this, arguments);
    }
    TapBarItemHandlerImpl.initWithOwner = function (owner) {
        var handler = TapBarItemHandlerImpl.new();
        handler._owner = owner;
        return handler;
    };
    TapBarItemHandlerImpl.prototype.tap = function (args) {
        var owner = this._owner.get();
        if (owner) {
            owner._raiseTap();
        }
    };
    TapBarItemHandlerImpl.ObjCExposedMethods = {
        "tap": { returns: interop.types.void, params: [interop.types.id] }
    };
    return TapBarItemHandlerImpl;
}(NSObject));
var ActionBarStyler = (function () {
    function ActionBarStyler() {
    }
    ActionBarStyler.setColorProperty = function (v, newValue) {
        var topFrame = frame.topmost();
        if (topFrame) {
            var navBar = topFrame.ios.controller.navigationBar;
            navBar.titleTextAttributes = (_a = {}, _a[NSForegroundColorAttributeName] = newValue, _a);
            navBar.tintColor = newValue;
        }
        var _a;
    };
    ActionBarStyler.resetColorProperty = function (v, nativeValue) {
        var topFrame = frame.topmost();
        if (topFrame) {
            var navBar = topFrame.ios.controller.navigationBar;
            navBar.titleTextAttributes = null;
            navBar.tintColor = null;
        }
    };
    ActionBarStyler.setBackgroundColorProperty = function (v, newValue) {
        var topFrame = frame.topmost();
        if (topFrame) {
            var navBar = topFrame.ios.controller.navigationBar;
            navBar.barTintColor = newValue;
        }
    };
    ActionBarStyler.resetBackgroundColorProperty = function (v, nativeValue) {
        var topFrame = frame.topmost();
        if (topFrame) {
            var navBar = topFrame.ios.controller.navigationBar;
            navBar.barTintColor = null;
        }
    };
    ActionBarStyler.registerHandlers = function () {
        style.registerHandler(style.colorProperty, new style.StylePropertyChangedHandler(ActionBarStyler.setColorProperty, ActionBarStyler.resetColorProperty), "ActionBar");
        style.registerHandler(style.backgroundColorProperty, new style.StylePropertyChangedHandler(ActionBarStyler.setBackgroundColorProperty, ActionBarStyler.resetBackgroundColorProperty), "ActionBar");
        style.registerHandler(style.backgroundInternalProperty, style.ignorePropertyHandler, "ActionBar");
    };
    return ActionBarStyler;
}());
exports.ActionBarStyler = ActionBarStyler;
ActionBarStyler.registerHandlers();
