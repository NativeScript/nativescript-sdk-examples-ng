var common = require("./web-view-common");
var trace = require("trace");
global.moduleMerge(common, exports);
var UIWebViewDelegateImpl = (function (_super) {
    __extends(UIWebViewDelegateImpl, _super);
    function UIWebViewDelegateImpl() {
        _super.apply(this, arguments);
    }
    UIWebViewDelegateImpl.initWithOwner = function (owner) {
        var delegate = UIWebViewDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    };
    UIWebViewDelegateImpl.prototype.webViewShouldStartLoadWithRequestNavigationType = function (webView, request, navigationType) {
        var owner = this._owner.get();
        if (owner && request.URL) {
            var navTypeIndex = common.WebView.navigationTypes.indexOf("other");
            switch (navigationType) {
                case UIWebViewNavigationType.LinkClicked:
                    navTypeIndex = common.WebView.navigationTypes.indexOf("linkClicked");
                    break;
                case UIWebViewNavigationType.FormSubmitted:
                    navTypeIndex = common.WebView.navigationTypes.indexOf("formSubmitted");
                    break;
                case UIWebViewNavigationType.BackForward:
                    navTypeIndex = common.WebView.navigationTypes.indexOf("backForward");
                    break;
                case UIWebViewNavigationType.Reload:
                    navTypeIndex = common.WebView.navigationTypes.indexOf("reload");
                    break;
                case UIWebViewNavigationType.FormResubmitted:
                    navTypeIndex = common.WebView.navigationTypes.indexOf("formResubmitted");
                    break;
            }
            if (trace.enabled) {
                trace.write("UIWebViewDelegateClass.webViewShouldStartLoadWithRequestNavigationType(" + request.URL.absoluteString + ", " + navigationType + ")", trace.categories.Debug);
            }
            owner._onLoadStarted(request.URL.absoluteString, common.WebView.navigationTypes[navTypeIndex]);
        }
        return true;
    };
    UIWebViewDelegateImpl.prototype.webViewDidStartLoad = function (webView) {
        if (trace.enabled) {
            trace.write("UIWebViewDelegateClass.webViewDidStartLoad(" + webView.request.URL + ")", trace.categories.Debug);
        }
    };
    UIWebViewDelegateImpl.prototype.webViewDidFinishLoad = function (webView) {
        if (trace.enabled) {
            trace.write("UIWebViewDelegateClass.webViewDidFinishLoad(" + webView.request.URL + ")", trace.categories.Debug);
        }
        var owner = this._owner.get();
        if (owner) {
            owner._onLoadFinished(webView.request.URL.absoluteString);
        }
    };
    UIWebViewDelegateImpl.prototype.webViewDidFailLoadWithError = function (webView, error) {
        var owner = this._owner.get();
        if (owner) {
            var url = owner.url;
            if (webView.request && webView.request.URL) {
                url = webView.request.URL.absoluteString;
            }
            if (trace.enabled) {
                trace.write("UIWebViewDelegateClass.webViewDidFailLoadWithError(" + error.localizedDescription + ")", trace.categories.Debug);
            }
            if (owner) {
                owner._onLoadFinished(url, error.localizedDescription);
            }
        }
    };
    UIWebViewDelegateImpl.ObjCProtocols = [UIWebViewDelegate];
    return UIWebViewDelegateImpl;
}(NSObject));
var WebView = (function (_super) {
    __extends(WebView, _super);
    function WebView() {
        _super.call(this);
        this._ios = new UIWebView();
        this._delegate = UIWebViewDelegateImpl.initWithOwner(new WeakRef(this));
    }
    WebView.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.delegate = this._delegate;
    };
    WebView.prototype.onUnloaded = function () {
        this._ios.delegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    Object.defineProperty(WebView.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    WebView.prototype.stopLoading = function () {
        this._ios.stopLoading();
    };
    WebView.prototype._loadUrl = function (url) {
        if (trace.enabled) {
            trace.write("WebView._loadUrl(" + url + ")", trace.categories.Debug);
        }
        if (this._ios.loading) {
            this._ios.stopLoading();
        }
        this._ios.loadRequest(NSURLRequest.requestWithURL(NSURL.URLWithString(url)));
    };
    WebView.prototype._loadFileOrResource = function (path, content) {
        var baseURL = NSURL.fileURLWithPath(NSString.stringWithString(path).stringByDeletingLastPathComponent);
        this._ios.loadHTMLStringBaseURL(content, baseURL);
    };
    WebView.prototype._loadHttp = function (src) {
        this._ios.loadRequest(NSURLRequest.requestWithURL(NSURL.URLWithString(src)));
    };
    WebView.prototype._loadData = function (content) {
        var fs = require("file-system");
        this._ios.loadHTMLStringBaseURL(content, NSURL.alloc().initWithString("file:///" + fs.knownFolders.currentApp().path + "/"));
    };
    Object.defineProperty(WebView.prototype, "canGoBack", {
        get: function () {
            return this._ios.canGoBack;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebView.prototype, "canGoForward", {
        get: function () {
            return this._ios.canGoForward;
        },
        enumerable: true,
        configurable: true
    });
    WebView.prototype.goBack = function () {
        this._ios.goBack();
    };
    WebView.prototype.goForward = function () {
        this._ios.goForward();
    };
    WebView.prototype.reload = function () {
        this._ios.reload();
    };
    return WebView;
}(common.WebView));
exports.WebView = WebView;
