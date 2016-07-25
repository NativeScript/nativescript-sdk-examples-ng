var types = require("utils/types");
var fs = require("file-system");
var common = require("./image-source-common");
var enums = require("ui/enums");
global.moduleMerge(common, exports);
var ImageSource = (function () {
    function ImageSource() {
    }
    ImageSource.prototype.loadFromResource = function (name) {
        this.ios = UIImage.tns_safeImageNamed(name) || UIImage.tns_safeImageNamed(name + ".jpg");
        return this.ios != null;
    };
    ImageSource.prototype.fromResource = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                UIImage.tns_safeDecodeImageNamedCompletion(name, function (image) {
                    if (image) {
                        _this.ios = image;
                        resolve(true);
                    }
                    else {
                        UIImage.tns_safeDecodeImageNamedCompletion(name + ".jpg", function (image) {
                            _this.ios = image;
                            resolve(true);
                        });
                    }
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    };
    ImageSource.prototype.loadFromFile = function (path) {
        var fileName = types.isString(path) ? path.trim() : "";
        if (fileName.indexOf("~/") === 0) {
            fileName = fs.path.join(fs.knownFolders.currentApp().path, fileName.replace("~/", ""));
        }
        this.ios = UIImage.imageWithContentsOfFile(fileName);
        return this.ios != null;
    };
    ImageSource.prototype.fromFile = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var fileName = types.isString(path) ? path.trim() : "";
                if (fileName.indexOf("~/") === 0) {
                    fileName = fs.path.join(fs.knownFolders.currentApp().path, fileName.replace("~/", ""));
                }
                UIImage.tns_decodeImageWidthContentsOfFileCompletion(fileName, function (image) {
                    _this.ios = image;
                    resolve(true);
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    };
    ImageSource.prototype.loadFromData = function (data) {
        this.ios = UIImage.imageWithData(data);
        return this.ios != null;
    };
    ImageSource.prototype.fromData = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                UIImage.tns_decodeImageWithDataCompletion(data, function (image) {
                    _this.ios = image;
                    resolve(true);
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    };
    ImageSource.prototype.loadFromBase64 = function (source) {
        if (types.isString(source)) {
            var data = NSData.alloc().initWithBase64EncodedStringOptions(source, NSDataBase64DecodingOptions.NSDataBase64DecodingIgnoreUnknownCharacters);
            this.ios = UIImage.imageWithData(data);
        }
        return this.ios != null;
    };
    ImageSource.prototype.fromBase64 = function (source) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var data = NSData.alloc().initWithBase64EncodedStringOptions(source, NSDataBase64DecodingOptions.NSDataBase64DecodingIgnoreUnknownCharacters);
                UIImage.imageWithData["async"](UIImage, [data]).then(function (image) {
                    _this.ios = image;
                    resolve(true);
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    };
    ImageSource.prototype.setNativeSource = function (source) {
        this.ios = source;
        return source != null;
    };
    ImageSource.prototype.saveToFile = function (path, format, quality) {
        if (!this.ios) {
            return false;
        }
        var data = getImageData(this.ios, format, quality);
        if (data) {
            return data.writeToFileAtomically(path, true);
        }
        return false;
    };
    ImageSource.prototype.toBase64String = function (format, quality) {
        var res = null;
        if (!this.ios) {
            return res;
        }
        var data = getImageData(this.ios, format, quality);
        if (data) {
            res = data.base64Encoding();
        }
        return res;
    };
    Object.defineProperty(ImageSource.prototype, "height", {
        get: function () {
            if (this.ios) {
                return this.ios.size.height;
            }
            return NaN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageSource.prototype, "width", {
        get: function () {
            if (this.ios) {
                return this.ios.size.width;
            }
            return NaN;
        },
        enumerable: true,
        configurable: true
    });
    return ImageSource;
}());
exports.ImageSource = ImageSource;
function getImageData(instance, format, quality) {
    if (quality === void 0) { quality = 1.0; }
    var data = null;
    switch (format) {
        case enums.ImageFormat.png:
            data = UIImagePNGRepresentation(instance);
            break;
        case enums.ImageFormat.jpeg:
            data = UIImageJPEGRepresentation(instance, quality);
            break;
    }
    return data;
}
