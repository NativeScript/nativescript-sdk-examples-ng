var transition = require("ui/transition");
var FadeTransition = (function (_super) {
    __extends(FadeTransition, _super);
    function FadeTransition() {
        _super.apply(this, arguments);
    }
    FadeTransition.prototype.animateIOSTransition = function (containerView, fromView, toView, operation, completion) {
        var originalToViewAlpha = toView.alpha;
        var originalFromViewAlpha = fromView.alpha;
        toView.alpha = 0.0;
        fromView.alpha = 1.0;
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
            toView.alpha = 1.0;
            fromView.alpha = 0.0;
        }, function (finished) {
            toView.alpha = originalToViewAlpha;
            fromView.alpha = originalFromViewAlpha;
            completion(finished);
        });
    };
    return FadeTransition;
}(transition.Transition));
exports.FadeTransition = FadeTransition;
