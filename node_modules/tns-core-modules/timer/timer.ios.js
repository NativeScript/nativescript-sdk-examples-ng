var timeoutCallbacks = new Map();
var timerId = 0;
var TimerTargetImpl = (function (_super) {
    __extends(TimerTargetImpl, _super);
    function TimerTargetImpl() {
        _super.apply(this, arguments);
    }
    TimerTargetImpl.initWithCallback = function (callback, id, shouldRepeat) {
        var handler = TimerTargetImpl.new();
        handler.callback = callback;
        handler.id = id;
        handler.shouldRepeat = shouldRepeat;
        return handler;
    };
    TimerTargetImpl.prototype.tick = function (timer) {
        if (!this.disposed) {
            this.callback();
        }
        if (!this.shouldRepeat) {
            this.unregister();
        }
    };
    TimerTargetImpl.prototype.unregister = function () {
        if (!this.disposed) {
            this.disposed = true;
            var timer = timeoutCallbacks.get(this.id).k;
            timer.invalidate();
            timeoutCallbacks.delete(this.id);
        }
    };
    TimerTargetImpl.ObjCExposedMethods = {
        "tick": { returns: interop.types.void, params: [NSTimer] }
    };
    return TimerTargetImpl;
}(NSObject));
function createTimerAndGetId(callback, milliseconds, shouldRepeat) {
    timerId++;
    var id = timerId;
    var timerTarget = TimerTargetImpl.initWithCallback(callback, id, shouldRepeat);
    var timer = NSTimer.scheduledTimerWithTimeIntervalTargetSelectorUserInfoRepeats(milliseconds / 1000, timerTarget, "tick", null, shouldRepeat);
    var pair = { k: timer, v: timerTarget };
    timeoutCallbacks.set(id, pair);
    return id;
}
function setTimeout(callback, milliseconds) {
    if (milliseconds === void 0) { milliseconds = 0; }
    return createTimerAndGetId(zonedCallback(callback), milliseconds, false);
}
exports.setTimeout = setTimeout;
function clearTimeout(id) {
    var pair = timeoutCallbacks.get(id);
    if (pair) {
        pair.v.unregister();
    }
}
exports.clearTimeout = clearTimeout;
function setInterval(callback, milliseconds) {
    if (milliseconds === void 0) { milliseconds = 0; }
    return createTimerAndGetId(zonedCallback(callback), milliseconds, true);
}
exports.setInterval = setInterval;
exports.clearInterval = clearTimeout;
