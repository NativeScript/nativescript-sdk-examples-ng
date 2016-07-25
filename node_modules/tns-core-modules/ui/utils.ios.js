var utils = require("utils/utils");
var ios;
(function (ios) {
    function getActualHeight(view) {
        if (view.window && !view.hidden) {
            return view.frame.size.height;
        }
        return 0;
    }
    ios.getActualHeight = getActualHeight;
    function getStatusBarHeight() {
        var app = UIApplication.sharedApplication();
        if (!app || app.statusBarHidden) {
            return 0;
        }
        var statusFrame = app.statusBarFrame;
        return Math.min(statusFrame.size.width, statusFrame.size.height);
    }
    ios.getStatusBarHeight = getStatusBarHeight;
    function _layoutRootView(rootView, parentBounds) {
        if (!rootView || !parentBounds) {
            return;
        }
        var size = parentBounds.size;
        var width = size.width;
        var height = size.height;
        var superview = rootView._nativeView.superview;
        var superViewRotationRadians;
        if (superview) {
            superViewRotationRadians = atan2f(superview.transform.b, superview.transform.a);
        }
        if (utils.ios.MajorVersion < 8 && utils.ios.isLandscape() && !superViewRotationRadians) {
            width = size.height;
            height = size.width;
        }
        var origin = parentBounds.origin;
        var left = origin.x;
        var top = origin.y;
        var widthSpec = utils.layout.makeMeasureSpec(width, utils.layout.EXACTLY);
        var heightSpec = utils.layout.makeMeasureSpec(height, utils.layout.EXACTLY);
        rootView.measure(widthSpec, heightSpec);
        rootView.layout(left, top, width, height);
    }
    ios._layoutRootView = _layoutRootView;
})(ios = exports.ios || (exports.ios = {}));
