var inspectorCommands = require("./InspectorBackendCommands");
var debuggerDomains = require("./debugger");
var frameId = "NativeScriptMainFrameIdentifier";
var loaderId = "Loader Identifier";
var resources_datas = [];
var documentTypeByMimeType = {
    "text/xml": "Document",
    "text/plain": "Document",
    "text/html": "Document",
    "application/xml": "Document",
    "application/xhtml+xml": "Document",
    "text/css": "Stylesheet",
    "text/javascript": "Script",
    "text/ecmascript": "Script",
    "application/javascript": "Script",
    "application/ecmascript": "Script",
    "application/x-javascript": "Script",
    "application/json": "Script",
    "application/x-json": "Script",
    "text/x-javascript": "Script",
    "text/x-json": "Script",
    "text/typescript": "Script"
};
var Request = (function () {
    function Request(_networkDomainDebugger, _requestID) {
        this._networkDomainDebugger = _networkDomainDebugger;
        this._requestID = _requestID;
    }
    Object.defineProperty(Request.prototype, "mimeType", {
        get: function () {
            return this._mimeType;
        },
        set: function (value) {
            if (this._mimeType !== value) {
                this._mimeType = value;
                var resourceType = "Other";
                if (this._mimeType in documentTypeByMimeType) {
                    resourceType = documentTypeByMimeType[this._mimeType];
                }
                if (this._mimeType.indexOf("image/") !== -1) {
                    resourceType = "Image";
                }
                if (this._mimeType.indexOf("font/") !== -1) {
                    resourceType = "Font";
                }
                this._resourceType = resourceType;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "requestID", {
        get: function () {
            return this._requestID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "hasTextContent", {
        get: function () {
            return ["Document", "Stylesheet", "Script", "XHR"].indexOf(this._resourceType) !== -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            if (this._data !== value) {
                this._data = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "resourceType", {
        get: function () {
            return this._resourceType;
        },
        set: function (value) {
            if (this._resourceType !== value) {
                this._resourceType = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Request.prototype.responseReceived = function (response) {
        if (this._networkDomainDebugger.enabled) {
            this._networkDomainDebugger.events.responseReceived(this.requestID, frameId, loaderId, __inspectorTimestamp(), this.resourceType, response);
        }
    };
    Request.prototype.loadingFinished = function () {
        if (this._networkDomainDebugger.enabled) {
            this._networkDomainDebugger.events.loadingFinished(this.requestID, __inspectorTimestamp());
        }
    };
    Request.prototype.requestWillBeSent = function (request) {
        if (this._networkDomainDebugger.enabled) {
            this._networkDomainDebugger.events.requestWillBeSent(this.requestID, frameId, loaderId, request.url, request, __inspectorTimestamp(), { type: 'Script' });
        }
    };
    return Request;
}());
exports.Request = Request;
var NetworkDomainDebugger = (function () {
    function NetworkDomainDebugger() {
        this.events = new inspectorCommands.NetworkDomain.NetworkFrontend();
    }
    Object.defineProperty(NetworkDomainDebugger.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        enumerable: true,
        configurable: true
    });
    NetworkDomainDebugger.prototype.enable = function () {
        if (debuggerDomains.network) {
            throw new Error("One NetworkDomainDebugger may be enabled at a time.");
        }
        else {
            debuggerDomains.network = this;
        }
        this._enabled = true;
    };
    NetworkDomainDebugger.prototype.disable = function () {
        if (debuggerDomains.network === this) {
            debuggerDomains.network = null;
        }
        this._enabled = false;
    };
    NetworkDomainDebugger.prototype.setExtraHTTPHeaders = function (params) {
    };
    NetworkDomainDebugger.prototype.getResponseBody = function (params) {
        var resource_data = resources_datas[params.requestId];
        var body = resource_data.hasTextContent ? NSString.alloc().initWithDataEncoding(resource_data.data, 4).toString() :
            resource_data.data.base64EncodedStringWithOptions(0);
        if (resource_data) {
            return {
                body: body,
                base64Encoded: !resource_data.hasTextContent
            };
        }
    };
    NetworkDomainDebugger.prototype.canClearBrowserCache = function () {
        return {
            result: false
        };
    };
    NetworkDomainDebugger.prototype.clearBrowserCache = function () {
    };
    NetworkDomainDebugger.prototype.canClearBrowserCookies = function () {
        return {
            result: false
        };
    };
    NetworkDomainDebugger.prototype.clearBrowserCookies = function () {
    };
    NetworkDomainDebugger.prototype.setCacheDisabled = function (params) {
    };
    NetworkDomainDebugger.prototype.loadResource = function (params) {
        var appPath = NSBundle.mainBundle().bundlePath;
        var pathUrl = params.url.replace("file://", appPath);
        var fileManager = NSFileManager.defaultManager();
        var data = fileManager.fileExistsAtPath(pathUrl) ? fileManager.contentsAtPath(pathUrl) : undefined;
        var content = data ? NSString.alloc().initWithDataEncoding(data, NSUTF8StringEncoding) : "";
        return {
            content: content.toString(),
            mimeType: "application/octet-stream",
            status: 200
        };
    };
    NetworkDomainDebugger.prototype.create = function () {
        var id = (++NetworkDomainDebugger.idSequence).toString();
        var resourceData = new Request(this, id);
        resources_datas[id] = resourceData;
        return resourceData;
    };
    NetworkDomainDebugger.idSequence = 0;
    NetworkDomainDebugger = __decorate([
        inspectorCommands.DomainDispatcher("Network")
    ], NetworkDomainDebugger);
    return NetworkDomainDebugger;
}());
exports.NetworkDomainDebugger = NetworkDomainDebugger;
