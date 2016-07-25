var http = require("http");
var types = require("utils/types");
var domainDebugger = require("./../debugger/debugger");
var GET = "GET";
var USER_AGENT_HEADER = "User-Agent";
var USER_AGENT = "Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25";
var sessionConfig = NSURLSessionConfiguration.defaultSessionConfiguration();
var queue = NSOperationQueue.mainQueue();
var session = NSURLSession.sessionWithConfigurationDelegateDelegateQueue(sessionConfig, null, queue);
var utils;
function ensureUtils() {
    if (!utils) {
        utils = require("utils/utils");
    }
}
var imageSource;
function ensureImageSource() {
    if (!imageSource) {
        imageSource = require("image-source");
    }
}
function request(options) {
    return new Promise(function (resolve, reject) {
        try {
            var debugRequest = domainDebugger.network && domainDebugger.network.create();
            var urlRequest = NSMutableURLRequest.requestWithURL(NSURL.URLWithString(options.url));
            urlRequest.HTTPMethod = types.isDefined(options.method) ? options.method : GET;
            urlRequest.setValueForHTTPHeaderField(USER_AGENT, USER_AGENT_HEADER);
            if (options.headers) {
                for (var header in options.headers) {
                    urlRequest.setValueForHTTPHeaderField(options.headers[header] + "", header);
                }
            }
            if (types.isString(options.content) || options.content instanceof FormData) {
                urlRequest.HTTPBody = NSString.alloc().initWithString(options.content.toString()).dataUsingEncoding(4);
            }
            if (types.isNumber(options.timeout)) {
                urlRequest.timeoutInterval = options.timeout / 1000;
            }
            var dataTask = session.dataTaskWithRequestCompletionHandler(urlRequest, function (data, response, error) {
                if (error) {
                    reject(new Error(error.localizedDescription));
                }
                else {
                    var headers = {};
                    if (response && response.allHeaderFields) {
                        var headerFields = response.allHeaderFields;
                        headerFields.enumerateKeysAndObjectsUsingBlock(function (key, value, stop) {
                            http.addHeader(headers, key, value);
                        });
                    }
                    if (debugRequest) {
                        debugRequest.mimeType = response.MIMEType;
                        debugRequest.data = data;
                        var debugResponse = {
                            url: options.url,
                            status: response.statusCode,
                            statusText: NSHTTPURLResponse.localizedStringForStatusCode(response.statusCode),
                            headers: headers,
                            mimeType: response.MIMEType,
                            fromDiskCache: false
                        };
                        debugRequest.responseReceived(debugResponse);
                        debugRequest.loadingFinished();
                    }
                    resolve({
                        content: {
                            raw: data,
                            toString: function () { return NSDataToString(data); },
                            toJSON: function () {
                                ensureUtils();
                                return utils.parseJSON(NSDataToString(data));
                            },
                            toImage: function () {
                                ensureImageSource();
                                return new Promise(function (resolve, reject) {
                                    UIImage.tns_decodeImageWithDataCompletion(data, function (image) {
                                        if (image) {
                                            resolve(imageSource.fromNativeSource(image));
                                        }
                                        else {
                                            reject(new Error("Response content may not be converted to an Image"));
                                        }
                                    });
                                });
                            },
                            toFile: function (destinationFilePath) {
                                var fs = require("file-system");
                                var fileName = options.url;
                                if (!destinationFilePath) {
                                    destinationFilePath = fs.path.join(fs.knownFolders.documents().path, fileName.substring(fileName.lastIndexOf('/') + 1));
                                }
                                if (data instanceof NSData) {
                                    data.writeToFileAtomically(destinationFilePath, true);
                                    return fs.File.fromPath(destinationFilePath);
                                }
                                else {
                                    reject(new Error("Cannot save file with path: " + destinationFilePath + "."));
                                }
                            }
                        },
                        statusCode: response.statusCode,
                        headers: headers
                    });
                }
            });
            if (options.url && debugRequest) {
                var request = {
                    url: options.url,
                    method: "GET",
                    headers: options.headers
                };
                debugRequest.requestWillBeSent(request);
            }
            dataTask.resume();
        }
        catch (ex) {
            reject(ex);
        }
    });
}
exports.request = request;
function NSDataToString(data) {
    return NSString.alloc().initWithDataEncoding(data, 4).toString();
}
