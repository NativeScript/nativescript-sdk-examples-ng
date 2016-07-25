var frameCommon = require("./frame-common");
var trace = require("trace");
var enums_1 = require("ui/enums");
var utils = require("utils/utils");
var view_1 = require("ui/core/view");
var uiUtils = require("ui/utils");
var types = require("utils/types");
var application = require("application");
var transitionModule;
global.moduleMerge(frameCommon, exports);
var ENTRY = "_entry";
var NAV_DEPTH = "_navDepth";
var TRANSITION = "_transition";
var DELEGATE = "_delegate";
var navDepth = -1;
var Frame = (function (_super) {
    __extends(Frame, _super);
    function Frame() {
        _super.call(this);
        this._animatedDelegate = UINavigationControllerAnimatedDelegate.new();
        this._shouldSkipNativePop = false;
        this._isInitialNavigation = true;
        this._ios = new iOSFrame(this);
        var frameRef = new WeakRef(this);
        application.ios.addNotificationObserver(UIApplicationDidChangeStatusBarFrameNotification, function (notification) {
            var frame = frameRef.get();
            if (frame) {
                frame._handleHigherInCallStatusBarIfNeeded();
                if (frame.currentPage) {
                    frame.currentPage.requestLayout();
                }
            }
        });
    }
    Frame.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        if (this._paramToNavigate) {
            this.navigate(this._paramToNavigate);
            this._paramToNavigate = undefined;
        }
    };
    Frame.prototype.navigate = function (param) {
        if (this.isLoaded) {
            _super.prototype.navigate.call(this, param);
            this._isInitialNavigation = false;
        }
        else {
            this._paramToNavigate = param;
        }
    };
    Frame.prototype._navigateCore = function (backstackEntry) {
        _super.prototype._navigateCore.call(this, backstackEntry);
        var viewController = backstackEntry.resolvedPage.ios;
        if (!viewController) {
            throw new Error("Required page does not have a viewController created.");
        }
        var clearHistory = backstackEntry.entry.clearHistory;
        if (clearHistory) {
            navDepth = -1;
        }
        navDepth++;
        var navigationTransition;
        var animated = this.currentPage ? this._getIsAnimatedNavigation(backstackEntry.entry) : false;
        if (animated) {
            navigationTransition = this._getNavigationTransition(backstackEntry.entry);
            if (navigationTransition) {
                viewController[TRANSITION] = navigationTransition;
            }
        }
        else {
            viewController[TRANSITION] = { name: "non-animated" };
        }
        var nativeTransition = _getNativeTransition(navigationTransition, true);
        if (!nativeTransition && navigationTransition) {
            this._ios.controller.delegate = this._animatedDelegate;
            viewController[DELEGATE] = this._animatedDelegate;
        }
        else {
            viewController[DELEGATE] = null;
            this._ios.controller.delegate = null;
        }
        backstackEntry[NAV_DEPTH] = navDepth;
        viewController[ENTRY] = backstackEntry;
        this._updateActionBar(backstackEntry.resolvedPage);
        if (!this._currentEntry) {
            this._ios.controller.pushViewControllerAnimated(viewController, animated);
            if (trace.enabled) {
                trace.write(this + ".pushViewControllerAnimated(" + viewController + ", " + animated + "); depth = " + navDepth, trace.categories.Navigation);
            }
            return;
        }
        if (clearHistory) {
            viewController.navigationItem.hidesBackButton = true;
            var newControllers = NSMutableArray.alloc().initWithCapacity(1);
            newControllers.addObject(viewController);
            this._ios.controller.setViewControllersAnimated(newControllers, animated);
            if (trace.enabled) {
                trace.write(this + ".setViewControllersAnimated([" + viewController + "], " + animated + "); depth = " + navDepth, trace.categories.Navigation);
            }
            return;
        }
        if (!Frame._isEntryBackstackVisible(this._currentEntry)) {
            var newControllers = NSMutableArray.alloc().initWithArray(this._ios.controller.viewControllers);
            if (newControllers.count === 0) {
                throw new Error("Wrong controllers count.");
            }
            viewController.navigationItem.hidesBackButton = this.backStack.length === 0;
            newControllers.removeLastObject();
            newControllers.addObject(viewController);
            this._ios.controller.setViewControllersAnimated(newControllers, animated);
            if (trace.enabled) {
                trace.write(this + ".setViewControllersAnimated([originalControllers - lastController + " + viewController + "], " + animated + "); depth = " + navDepth, trace.categories.Navigation);
            }
            return;
        }
        this._ios.controller.pushViewControllerAnimated(viewController, animated);
        if (trace.enabled) {
            trace.write(this + ".pushViewControllerAnimated(" + viewController + ", " + animated + "); depth = " + navDepth, trace.categories.Navigation);
        }
    };
    Frame.prototype._goBackCore = function (backstackEntry) {
        _super.prototype._goBackCore.call(this, backstackEntry);
        navDepth = backstackEntry[NAV_DEPTH];
        if (!this._shouldSkipNativePop) {
            var controller = backstackEntry.resolvedPage.ios;
            var animated = this._currentEntry ? this._getIsAnimatedNavigation(this._currentEntry.entry) : false;
            this._updateActionBar(backstackEntry.resolvedPage);
            if (trace.enabled) {
                trace.write(this + ".popToViewControllerAnimated(" + controller + ", " + animated + "); depth = " + navDepth, trace.categories.Navigation);
            }
            this._ios.controller.popToViewControllerAnimated(controller, animated);
        }
    };
    Frame.prototype._updateActionBar = function (page) {
        _super.prototype._updateActionBar.call(this, page);
        var page = page || this.currentPage;
        var newValue = this._getNavBarVisible(page);
        this._ios.showNavigationBar = newValue;
        if (this._ios.controller.navigationBar) {
            this._ios.controller.navigationBar.userInteractionEnabled = this.navigationQueueIsEmpty();
        }
    };
    Frame.prototype._getNavBarVisible = function (page) {
        switch (this._ios.navBarVisibility) {
            case enums_1.NavigationBarVisibility.always:
                return true;
            case enums_1.NavigationBarVisibility.never:
                return false;
            case enums_1.NavigationBarVisibility.auto:
                var newValue = void 0;
                if (page && types.isDefined(page.actionBarHidden)) {
                    newValue = !page.actionBarHidden;
                }
                else {
                    newValue = this.ios.controller.viewControllers.count > 1 || (page && page.actionBar && !page.actionBar._isEmpty());
                }
                newValue = !!newValue;
                return newValue;
        }
    };
    Object.defineProperty(Frame.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Frame.prototype, "_nativeView", {
        get: function () {
            return this._ios.controller.view;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Frame, "defaultAnimatedNavigation", {
        get: function () {
            return frameCommon.Frame.defaultAnimatedNavigation;
        },
        set: function (value) {
            frameCommon.Frame.defaultAnimatedNavigation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Frame, "defaultTransition", {
        get: function () {
            return frameCommon.Frame.defaultTransition;
        },
        set: function (value) {
            frameCommon.Frame.defaultTransition = value;
        },
        enumerable: true,
        configurable: true
    });
    Frame.prototype.requestLayout = function () {
        _super.prototype.requestLayout.call(this);
        var window = this._nativeView.window;
        if (window) {
            window.setNeedsLayout();
        }
    };
    Frame.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        var width = utils.layout.getMeasureSpecSize(widthMeasureSpec);
        var widthMode = utils.layout.getMeasureSpecMode(widthMeasureSpec);
        var height = utils.layout.getMeasureSpecSize(heightMeasureSpec);
        var heightMode = utils.layout.getMeasureSpecMode(heightMeasureSpec);
        this._widthMeasureSpec = widthMeasureSpec;
        this._heightMeasureSpec = heightMeasureSpec;
        var result = this.measurePage(this.currentPage);
        if (this._navigateToEntry && this.currentPage) {
            var newPageSize = this.measurePage(this._navigateToEntry.resolvedPage);
            result.measuredWidth = Math.max(result.measuredWidth, newPageSize.measuredWidth);
            result.measuredHeight = Math.max(result.measuredHeight, newPageSize.measuredHeight);
        }
        var widthAndState = view_1.View.resolveSizeAndState(result.measuredWidth, width, widthMode, 0);
        var heightAndState = view_1.View.resolveSizeAndState(result.measuredHeight, height, heightMode, 0);
        this.setMeasuredDimension(widthAndState, heightAndState);
    };
    Frame.prototype.measurePage = function (page) {
        var heightSpec = this._heightMeasureSpec;
        if (page && !page.backgroundSpanUnderStatusBar && !this.parent) {
            var height = utils.layout.getMeasureSpecSize(this._heightMeasureSpec);
            var heightMode = utils.layout.getMeasureSpecMode(this._heightMeasureSpec);
            var statusBarHeight = uiUtils.ios.getStatusBarHeight();
            heightSpec = utils.layout.makeMeasureSpec(height - statusBarHeight, heightMode);
        }
        return view_1.View.measureChild(this, page, this._widthMeasureSpec, heightSpec);
    };
    Frame.prototype.onLayout = function (left, top, right, bottom) {
        this._right = right;
        this._bottom = bottom;
        this._handleHigherInCallStatusBarIfNeeded();
        this.layoutPage(this.currentPage);
        if (this._navigateToEntry && this.currentPage) {
            this.layoutPage(this._navigateToEntry.resolvedPage);
        }
    };
    Frame.prototype.layoutPage = function (page) {
        if (page && page._viewWillDisappear) {
            return;
        }
        var statusBarHeight = (page && !page.backgroundSpanUnderStatusBar && !this.parent) ? uiUtils.ios.getStatusBarHeight() : 0;
        view_1.View.layoutChild(this, page, 0, statusBarHeight, this._right, this._bottom);
    };
    Object.defineProperty(Frame.prototype, "navigationBarHeight", {
        get: function () {
            var navigationBar = this._ios.controller.navigationBar;
            return (navigationBar && !this._ios.controller.navigationBarHidden) ? navigationBar.frame.size.height : 0;
        },
        enumerable: true,
        configurable: true
    });
    Frame.prototype._setNativeViewFrame = function (nativeView, frame) {
        if (nativeView.frame.size.width === frame.size.width && nativeView.frame.size.height === frame.size.height) {
            return;
        }
        _super.prototype._setNativeViewFrame.call(this, nativeView, frame);
    };
    Frame.prototype.remeasureFrame = function () {
        this.requestLayout();
        var window = this._nativeView.window;
        if (window) {
            window.layoutIfNeeded();
        }
    };
    Frame.prototype._onNavigatingTo = function (backstackEntry, isBack) {
    };
    Frame.prototype._handleHigherInCallStatusBarIfNeeded = function () {
        var statusBarHeight = uiUtils.ios.getStatusBarHeight();
        if (!this._ios ||
            !this._ios.controller ||
            !this._ios.controller.navigationBar ||
            this._ios.controller.navigationBar.hidden ||
            this._ios.controller.navigationBar.frame.origin.y === statusBarHeight) {
            return;
        }
        if (trace.enabled) {
            trace.write("Forcing navigationBar.frame.origin.y to " + statusBarHeight + " due to a higher in-call status-bar", trace.categories.Layout);
        }
        this._ios.controller.navigationBar.autoresizingMask = UIViewAutoresizing.UIViewAutoresizingNone;
        this._ios.controller.navigationBar.removeConstraints(this._ios.controller.navigationBar.constraints);
        this._ios.controller.navigationBar.frame = CGRectMake(this._ios.controller.navigationBar.frame.origin.x, statusBarHeight, this._ios.controller.navigationBar.frame.size.width, this._ios.controller.navigationBar.frame.size.height);
    };
    return Frame;
}(frameCommon.Frame));
exports.Frame = Frame;
var transitionDelegates = new Array();
var TransitionDelegate = (function (_super) {
    __extends(TransitionDelegate, _super);
    function TransitionDelegate() {
        _super.apply(this, arguments);
    }
    TransitionDelegate.initWithOwnerId = function (id) {
        var delegate = TransitionDelegate.new();
        delegate._id = id;
        transitionDelegates.push(delegate);
        return delegate;
    };
    TransitionDelegate.prototype.animationWillStart = function (animationID, context) {
        if (trace.enabled) {
            trace.write("START " + this._id, trace.categories.Transition);
        }
    };
    TransitionDelegate.prototype.animationDidStop = function (animationID, finished, context) {
        if (finished) {
            if (trace.enabled) {
                trace.write("END " + this._id, trace.categories.Transition);
            }
        }
        else {
            if (trace.enabled) {
                trace.write("CANCEL " + this._id, trace.categories.Transition);
            }
        }
        var index = transitionDelegates.indexOf(this);
        if (index > -1) {
            transitionDelegates.splice(index, 1);
        }
    };
    TransitionDelegate.ObjCExposedMethods = {
        "animationWillStart": { returns: interop.types.void, params: [NSString, NSObject] },
        "animationDidStop": { returns: interop.types.void, params: [NSString, NSNumber, NSObject] }
    };
    return TransitionDelegate;
}(NSObject));
var _defaultTransitionDuration = 0.35;
var UINavigationControllerAnimatedDelegate = (function (_super) {
    __extends(UINavigationControllerAnimatedDelegate, _super);
    function UINavigationControllerAnimatedDelegate() {
        _super.apply(this, arguments);
    }
    UINavigationControllerAnimatedDelegate.prototype.navigationControllerAnimationControllerForOperationFromViewControllerToViewController = function (navigationController, operation, fromVC, toVC) {
        var viewController;
        switch (operation) {
            case UINavigationControllerOperation.UINavigationControllerOperationPush:
                viewController = toVC;
                break;
            case UINavigationControllerOperation.UINavigationControllerOperationPop:
                viewController = fromVC;
                break;
        }
        if (!viewController) {
            return null;
        }
        var navigationTransition = viewController[TRANSITION];
        if (!navigationTransition) {
            return null;
        }
        if (trace.enabled) {
            trace.write("UINavigationControllerImpl.navigationControllerAnimationControllerForOperationFromViewControllerToViewController(" + operation + ", " + fromVC + ", " + toVC + "), transition: " + JSON.stringify(navigationTransition), trace.categories.NativeLifecycle);
        }
        if (!transitionModule) {
            transitionModule = require("ui/transition");
        }
        var curve = _getNativeCurve(navigationTransition);
        var animationController = transitionModule._createIOSAnimatedTransitioning(navigationTransition, curve, operation, fromVC, toVC);
        return animationController;
    };
    UINavigationControllerAnimatedDelegate.ObjCProtocols = [UINavigationControllerDelegate];
    return UINavigationControllerAnimatedDelegate;
}(NSObject));
var UINavigationControllerImpl = (function (_super) {
    __extends(UINavigationControllerImpl, _super);
    function UINavigationControllerImpl() {
        _super.apply(this, arguments);
    }
    UINavigationControllerImpl.initWithOwner = function (owner) {
        var controller = UINavigationControllerImpl.new();
        controller._owner = owner;
        return controller;
    };
    Object.defineProperty(UINavigationControllerImpl.prototype, "owner", {
        get: function () {
            return this._owner.get();
        },
        enumerable: true,
        configurable: true
    });
    UINavigationControllerImpl.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        var owner = this._owner.get();
        if (owner) {
            owner.onLoaded();
        }
    };
    UINavigationControllerImpl.prototype.viewDidLayoutSubviews = function () {
        var owner = this._owner.get();
        if (owner) {
            if (trace.enabled) {
                trace.write(this._owner + " viewDidLayoutSubviews, isLoaded = " + owner.isLoaded, trace.categories.ViewHierarchy);
            }
            owner._updateLayout();
        }
    };
    UINavigationControllerImpl.prototype.animateWithDuration = function (navigationTransition, nativeTransition, transitionType, baseCallback) {
        var _this = this;
        var duration = navigationTransition.duration ? navigationTransition.duration / 1000 : _defaultTransitionDuration;
        var curve = _getNativeCurve(navigationTransition);
        var transitionTraced = trace.isCategorySet(trace.categories.Transition);
        var transitionDelegate;
        if (transitionTraced) {
            var id = _getTransitionId(nativeTransition, transitionType);
            transitionDelegate = TransitionDelegate.initWithOwnerId(id);
        }
        UIView.animateWithDurationAnimations(duration, function () {
            if (transitionTraced) {
                UIView.setAnimationDelegate(transitionDelegate);
            }
            UIView.setAnimationWillStartSelector("animationWillStart");
            UIView.setAnimationDidStopSelector("animationDidStop");
            UIView.setAnimationCurve(curve);
            baseCallback();
            UIView.setAnimationTransitionForViewCache(nativeTransition, _this.view, true);
        });
    };
    UINavigationControllerImpl.prototype.pushViewControllerAnimated = function (viewController, animated) {
        var _this = this;
        var navigationTransition = viewController[TRANSITION];
        if (trace.enabled) {
            trace.write("UINavigationControllerImpl.pushViewControllerAnimated(" + viewController + ", " + animated + "); transition: " + JSON.stringify(navigationTransition), trace.categories.NativeLifecycle);
        }
        var nativeTransition = _getNativeTransition(navigationTransition, true);
        if (!animated || !navigationTransition || !nativeTransition) {
            _super.prototype.pushViewControllerAnimated.call(this, viewController, animated);
            return;
        }
        this.animateWithDuration(navigationTransition, nativeTransition, "push", function () {
            _super.prototype.pushViewControllerAnimated.call(_this, viewController, false);
        });
    };
    UINavigationControllerImpl.prototype.setViewControllersAnimated = function (viewControllers, animated) {
        var _this = this;
        var viewController = viewControllers.lastObject;
        var navigationTransition = viewController[TRANSITION];
        if (trace.enabled) {
            trace.write("UINavigationControllerImpl.setViewControllersAnimated(" + viewControllers + ", " + animated + "); transition: " + JSON.stringify(navigationTransition), trace.categories.NativeLifecycle);
        }
        var nativeTransition = _getNativeTransition(navigationTransition, true);
        if (!animated || !navigationTransition || !nativeTransition) {
            _super.prototype.setViewControllersAnimated.call(this, viewControllers, animated);
            return;
        }
        this.animateWithDuration(navigationTransition, nativeTransition, "set", function () {
            _super.prototype.setViewControllersAnimated.call(_this, viewControllers, false);
        });
    };
    UINavigationControllerImpl.prototype.popViewControllerAnimated = function (animated) {
        var _this = this;
        var lastViewController = this.viewControllers.lastObject;
        var navigationTransition = lastViewController[TRANSITION];
        if (trace.enabled) {
            trace.write("UINavigationControllerImpl.popViewControllerAnimated(" + animated + "); transition: " + JSON.stringify(navigationTransition), trace.categories.NativeLifecycle);
        }
        if (navigationTransition && navigationTransition.name === "non-animated") {
            return _super.prototype.popViewControllerAnimated.call(this, false);
        }
        var nativeTransition = _getNativeTransition(navigationTransition, false);
        if (!animated || !navigationTransition || !nativeTransition) {
            return _super.prototype.popViewControllerAnimated.call(this, animated);
        }
        this.animateWithDuration(navigationTransition, nativeTransition, "pop", function () {
            _super.prototype.popViewControllerAnimated.call(_this, false);
        });
        return null;
    };
    UINavigationControllerImpl.prototype.popToViewControllerAnimated = function (viewController, animated) {
        var _this = this;
        var lastViewController = this.viewControllers.lastObject;
        var navigationTransition = lastViewController[TRANSITION];
        if (trace.enabled) {
            trace.write("UINavigationControllerImpl.popToViewControllerAnimated(" + viewController + ", " + animated + "); transition: " + JSON.stringify(navigationTransition), trace.categories.NativeLifecycle);
        }
        if (navigationTransition && navigationTransition.name === "non-animated") {
            return _super.prototype.popToViewControllerAnimated.call(this, viewController, false);
        }
        var nativeTransition = _getNativeTransition(navigationTransition, false);
        if (!animated || !navigationTransition || !nativeTransition) {
            return _super.prototype.popToViewControllerAnimated.call(this, viewController, animated);
        }
        this.animateWithDuration(navigationTransition, nativeTransition, "popTo", function () {
            _super.prototype.popToViewControllerAnimated.call(_this, viewController, false);
        });
        return null;
    };
    return UINavigationControllerImpl;
}(UINavigationController));
function _getTransitionId(nativeTransition, transitionType) {
    var name;
    switch (nativeTransition) {
        case UIViewAnimationTransition.UIViewAnimationTransitionCurlDown:
            name = "CurlDown";
            break;
        case UIViewAnimationTransition.UIViewAnimationTransitionCurlUp:
            name = "CurlUp";
            break;
        case UIViewAnimationTransition.UIViewAnimationTransitionFlipFromLeft:
            name = "FlipFromLeft";
            break;
        case UIViewAnimationTransition.UIViewAnimationTransitionFlipFromRight:
            name = "FlipFromRight";
            break;
        case UIViewAnimationTransition.UIViewAnimationTransitionNone:
            name = "None";
            break;
    }
    return name + " " + transitionType;
}
function _getNativeTransition(navigationTransition, push) {
    if (navigationTransition && navigationTransition.name) {
        switch (navigationTransition.name.toLowerCase()) {
            case "flip":
            case "flipright":
                return push ? UIViewAnimationTransition.UIViewAnimationTransitionFlipFromRight : UIViewAnimationTransition.UIViewAnimationTransitionFlipFromLeft;
            case "flipleft":
                return push ? UIViewAnimationTransition.UIViewAnimationTransitionFlipFromLeft : UIViewAnimationTransition.UIViewAnimationTransitionFlipFromRight;
            case "curl":
            case "curlup":
                return push ? UIViewAnimationTransition.UIViewAnimationTransitionCurlUp : UIViewAnimationTransition.UIViewAnimationTransitionCurlDown;
            case "curldown":
                return push ? UIViewAnimationTransition.UIViewAnimationTransitionCurlDown : UIViewAnimationTransition.UIViewAnimationTransitionCurlUp;
        }
    }
    return null;
}
function _getNativeCurve(transition) {
    if (transition.curve) {
        switch (transition.curve) {
            case enums_1.AnimationCurve.easeIn:
                if (trace.enabled) {
                    trace.write("Transition curve resolved to UIViewAnimationCurve.UIViewAnimationCurveEaseIn.", trace.categories.Transition);
                }
                return UIViewAnimationCurve.UIViewAnimationCurveEaseIn;
            case enums_1.AnimationCurve.easeOut:
                if (trace.enabled) {
                    trace.write("Transition curve resolved to UIViewAnimationCurve.UIViewAnimationCurveEaseOut.", trace.categories.Transition);
                }
                return UIViewAnimationCurve.UIViewAnimationCurveEaseOut;
            case enums_1.AnimationCurve.easeInOut:
                if (trace.enabled) {
                    trace.write("Transition curve resolved to UIViewAnimationCurve.UIViewAnimationCurveEaseInOut.", trace.categories.Transition);
                }
                return UIViewAnimationCurve.UIViewAnimationCurveEaseInOut;
            case enums_1.AnimationCurve.linear:
                if (trace.enabled) {
                    trace.write("Transition curve resolved to UIViewAnimationCurve.UIViewAnimationCurveLinear.", trace.categories.Transition);
                }
                return UIViewAnimationCurve.UIViewAnimationCurveLinear;
            default:
                if (trace.enabled) {
                    trace.write("Transition curve resolved to original: " + transition.curve, trace.categories.Transition);
                }
                return transition.curve;
        }
    }
    return UIViewAnimationCurve.UIViewAnimationCurveEaseInOut;
}
exports._getNativeCurve = _getNativeCurve;
var iOSFrame = (function () {
    function iOSFrame(frame) {
        this._frame = frame;
        this._controller = UINavigationControllerImpl.initWithOwner(new WeakRef(frame));
        this._controller.automaticallyAdjustsScrollViewInsets = false;
        this._navBarVisibility = enums_1.NavigationBarVisibility.auto;
    }
    Object.defineProperty(iOSFrame.prototype, "controller", {
        get: function () {
            return this._controller;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(iOSFrame.prototype, "showNavigationBar", {
        get: function () {
            return this._showNavigationBar;
        },
        set: function (value) {
            var change = this._showNavigationBar !== value;
            this._showNavigationBar = value;
            var animated = !this._frame._isInitialNavigation;
            this._controller.setNavigationBarHiddenAnimated(!value, animated);
            var currentPage = this._controller.owner.currentPage;
            if (currentPage && change) {
                currentPage.requestLayout();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(iOSFrame.prototype, "navBarVisibility", {
        get: function () {
            return this._navBarVisibility;
        },
        set: function (value) {
            this._navBarVisibility = value;
        },
        enumerable: true,
        configurable: true
    });
    return iOSFrame;
}());
