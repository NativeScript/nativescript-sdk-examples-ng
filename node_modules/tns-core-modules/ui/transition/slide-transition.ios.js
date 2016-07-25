var transition = require("ui/transition");
var platform = require("platform");
var screenWidth = platform.screen.mainScreen.widthDIPs;
var screenHeight = platform.screen.mainScreen.heightDIPs;
var leftEdge = CGAffineTransformMakeTranslation(-screenWidth, 0);
var rightEdge = CGAffineTransformMakeTranslation(screenWidth, 0);
var topEdge = CGAffineTransformMakeTranslation(0, -screenHeight);
var bottomEdge = CGAffineTransformMakeTranslation(0, screenHeight);
var SlideTransition = (function (_super) {
    __extends(SlideTransition, _super);
    function SlideTransition(direction, duration, curve) {
        _super.call(this, duration, curve);
        this._direction = direction;
    }
    SlideTransition.prototype.animateIOSTransition = function (containerView, fromView, toView, operation, completion) {
        var originalToViewTransform = toView.transform;
        var originalFromViewTransform = fromView.transform;
        var fromViewEndTransform;
        var toViewBeginTransform;
        var push = (operation === UINavigationControllerOperation.UINavigationControllerOperationPush);
        switch (this._direction) {
            case "left":
                toViewBeginTransform = push ? rightEdge : leftEdge;
                fromViewEndTransform = push ? leftEdge : rightEdge;
                break;
            case "right":
                toViewBeginTransform = push ? leftEdge : rightEdge;
                fromViewEndTransform = push ? rightEdge : leftEdge;
                break;
            case "top":
                toViewBeginTransform = push ? bottomEdge : topEdge;
                fromViewEndTransform = push ? topEdge : bottomEdge;
                break;
            case "bottom":
                toViewBeginTransform = push ? topEdge : bottomEdge;
                fromViewEndTransform = push ? bottomEdge : topEdge;
                break;
        }
        toView.transform = toViewBeginTransform;
        fromView.transform = CGAffineTransformIdentity;
        switch (operation) {
            case UINavigationControllerOperation.UINavigationControllerOperationPush:
                containerView.insertSubviewAboveSubview(toView, fromView);
                break;
            case UINavigationControllerOperation.UINavigationControllerOperationPop:
                containerView.insertSubviewBelowSubview(toView, fromView);
                break;
        }
        var duration = this.getDuration();
        var curve = this.getCurve();
        UIView.animateWithDurationAnimationsCompletion(duration, function () {
            UIView.setAnimationCurve(curve);
            toView.transform = CGAffineTransformIdentity;
            fromView.transform = fromViewEndTransform;
        }, function (finished) {
            toView.transform = originalToViewTransform;
            fromView.transform = originalFromViewTransform;
            completion(finished);
        });
    };
    return SlideTransition;
}(transition.Transition));
exports.SlideTransition = SlideTransition;
