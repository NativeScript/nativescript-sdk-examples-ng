var FrameHandlerImpl = (function (_super) {
    __extends(FrameHandlerImpl, _super);
    function FrameHandlerImpl() {
        _super.apply(this, arguments);
    }
    FrameHandlerImpl.initWithOwner = function (owner) {
        var handler = FrameHandlerImpl.new();
        handler._owner = owner;
        return handler;
    };
    FrameHandlerImpl.prototype.handleFrame = function (sender) {
        var owner = this._owner.get();
        if (owner) {
            owner._handleFrame(sender);
        }
    };
    FrameHandlerImpl.ObjCExposedMethods = {
        "handleFrame": { returns: interop.types.void, params: [CADisplayLink] }
    };
    return FrameHandlerImpl;
}(NSObject));
var FPSCallback = (function () {
    function FPSCallback(onFrame) {
        this.onFrame = onFrame;
        this.impl = FrameHandlerImpl.initWithOwner(new WeakRef(this));
        this.displayLink = CADisplayLink.displayLinkWithTargetSelector(this.impl, "handleFrame");
        this.displayLink.paused = true;
        this.displayLink.addToRunLoopForMode(NSRunLoop.currentRunLoop(), NSDefaultRunLoopMode);
        this.displayLink.addToRunLoopForMode(NSRunLoop.currentRunLoop(), UITrackingRunLoopMode);
    }
    FPSCallback.prototype.start = function () {
        if (this.running) {
            return;
        }
        this.running = true;
        this.displayLink.paused = false;
    };
    FPSCallback.prototype.stop = function () {
        if (!this.running) {
            return;
        }
        this.displayLink.paused = true;
        this.running = false;
    };
    FPSCallback.prototype._handleFrame = function (sender) {
        if (!this.running) {
            return;
        }
        this.onFrame(sender.timestamp * 1000);
    };
    return FPSCallback;
}());
exports.FPSCallback = FPSCallback;
