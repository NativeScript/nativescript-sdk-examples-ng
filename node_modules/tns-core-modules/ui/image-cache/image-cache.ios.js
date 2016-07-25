var common = require("./image-cache-common");
var utils = require("utils/utils");
var trace = require("trace");
var httpRequest;
function ensureHttpRequest() {
    if (!httpRequest) {
        httpRequest = require("http/http-request");
    }
}
var MemmoryWarningHandler = (function (_super) {
    __extends(MemmoryWarningHandler, _super);
    function MemmoryWarningHandler() {
        _super.apply(this, arguments);
    }
    MemmoryWarningHandler.new = function () {
        return _super.new.call(this);
    };
    MemmoryWarningHandler.prototype.initWithCache = function (cache) {
        this._cache = cache;
        NSNotificationCenter.defaultCenter().addObserverSelectorNameObject(this, "clearCache", "UIApplicationDidReceiveMemoryWarningNotification", null);
        if (trace.enabled) {
            trace.write("[MemmoryWarningHandler] Added low memory observer.", trace.categories.Debug);
        }
        return this;
    };
    MemmoryWarningHandler.prototype.dealloc = function () {
        NSNotificationCenter.defaultCenter().removeObserverNameObject(this, "UIApplicationDidReceiveMemoryWarningNotification", null);
        if (trace.enabled) {
            trace.write("[MemmoryWarningHandler] Removed low memory observer.", trace.categories.Debug);
        }
        _super.prototype.dealloc.call(this);
    };
    MemmoryWarningHandler.prototype.clearCache = function () {
        if (trace.enabled) {
            trace.write("[MemmoryWarningHandler] Clearing Image Cache.", trace.categories.Debug);
        }
        this._cache.removeAllObjects();
        utils.GC();
    };
    MemmoryWarningHandler.ObjCExposedMethods = {
        "clearCache": { returns: interop.types.void, params: [] }
    };
    return MemmoryWarningHandler;
}(NSObject));
var Cache = (function (_super) {
    __extends(Cache, _super);
    function Cache() {
        _super.call(this);
        this._cache = new NSCache();
        this._memoryWarningHandler = MemmoryWarningHandler.new().initWithCache(this._cache);
    }
    Cache.prototype._downloadCore = function (request) {
        ensureHttpRequest();
        var that = this;
        httpRequest.request({ url: request.url, method: "GET" })
            .then(function (response) {
            var image = UIImage.alloc().initWithData(response.content.raw);
            that._onDownloadCompleted(request.key, image);
        });
    };
    Cache.prototype.get = function (key) {
        return this._cache.objectForKey(key);
    };
    Cache.prototype.set = function (key, image) {
        this._cache.setObjectForKey(image, key);
    };
    Cache.prototype.remove = function (key) {
        this._cache.removeObjectForKey(key);
    };
    Cache.prototype.clear = function () {
        this._cache.removeAllObjects();
        utils.GC();
    };
    return Cache;
}(common.Cache));
exports.Cache = Cache;
