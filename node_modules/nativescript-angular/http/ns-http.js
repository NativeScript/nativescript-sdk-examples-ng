var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/fromPromise');
var ns_file_system_1 = require('../file-system/ns-file-system');
var NSXSRFStrategy = (function () {
    function NSXSRFStrategy() {
    }
    NSXSRFStrategy.prototype.configureRequest = function (req) {
        // noop
    };
    return NSXSRFStrategy;
}());
exports.NSXSRFStrategy = NSXSRFStrategy;
var NSHttp = (function (_super) {
    __extends(NSHttp, _super);
    function NSHttp(backend, defaultOptions, nsFileSystem) {
        _super.call(this, backend, defaultOptions);
        this.nsFileSystem = nsFileSystem;
    }
    /**
     * Performs a request with `get` http method.
     * Uses a local file if `~/` resource is requested.
     */
    NSHttp.prototype.get = function (url, options) {
        var _this = this;
        if (url.indexOf('~') === 0 || url.indexOf('/') === 0) {
            // normalize url
            url = url.replace('~', '').replace('/', '');
            // request from local app resources
            return Observable_1.Observable.fromPromise(new Promise(function (resolve, reject) {
                var app = _this.nsFileSystem.currentApp();
                var localFile = app.getFile(url);
                if (localFile) {
                    localFile.readText().then(function (data) {
                        resolve(responseOptions(data, 200, url));
                    }, function (err) {
                        reject(responseOptions(err, 400, url));
                    });
                }
                else {
                    reject(responseOptions('Not Found', 404, url));
                }
            }));
        }
        else {
            return _super.prototype.get.call(this, url, options);
        }
    };
    NSHttp = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.ConnectionBackend, http_1.RequestOptions, ns_file_system_1.NSFileSystem])
    ], NSHttp);
    return NSHttp;
}(http_1.Http));
exports.NSHttp = NSHttp;
function responseOptions(body, status, url) {
    return new http_1.Response(new http_1.ResponseOptions({
        body: body,
        status: status,
        statusText: 'OK',
        type: status === 200 ? http_1.ResponseType.Default : http_1.ResponseType.Error,
        url: url
    }));
}
//# sourceMappingURL=ns-http.js.map